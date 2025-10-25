/**
 * BioMiner Indexd Embed Script
 * 支持两种嵌入模式：
 * 1. URL参数模式：通过URL参数控制嵌入行为
 * 2. 通信模式：通过postMessage与父页面通信
 */

(function() {
    'use strict';

    // 嵌入配置
    const EMBED_CONFIG = {
        // 默认配置
        defaults: {
            hideAll: false,
            hideHeader: false,
            hideFooter: false,
            fullscreen: false,
            theme: 'light',
            customCSS: '',
            debug: false
        },
        
        // 支持的参数列表
        supportedParams: [
            'hideAll',
            'hideHeader',
            'hideFooter', 
            'fullscreen',
            'theme',
            'customCSS',
            'debug'
        ]
    };

    // 当前配置状态
    let currentConfig = { ...EMBED_CONFIG.defaults };
    let isEmbedMode = false;
    let styleElement = null;

    /**
     * 解析URL参数
     */
    function parseURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const params = {};
        
        EMBED_CONFIG.supportedParams.forEach(param => {
            const value = urlParams.get(param);
            if (value !== null) {
                // 处理布尔值参数
                if (['hideHeader', 'hideFooter', 'fullscreen', 'debug'].includes(param)) {
                    params[param] = value === 'true' || value === '1';
                } else {
                    params[param] = value;
                }
            }
        });
        
        return params;
    }

    /**
     * 生成嵌入样式
     */
    function generateEmbedStyles(config) {
        const styles = [];
        
        // 隐藏头部
        if (config.hideAll) {
            styles.push('.ant-layout-header, .ant-layout-footer, .biominer-footer { display: none !important; }');
        }
        
        // 隐藏头部
        if (config.hideHeader) {
            styles.push('.ant-layout-header { display: none !important; }');
        }
        
        // 隐藏底部
        if (config.hideFooter) {
            styles.push('.ant-layout-footer, .biominer-footer { display: none !important; }');
        }
        
        // 全屏模式
        if (config.fullscreen) {
            styles.push(`
                #root { 
                    padding: 0 !important; 
                    height: 100vh !important;
                }
                .ant-layout-content { 
                    background-color: #ffffff; 
                    margin: 0 !important;
                    padding: 10px !important;
                }
                .ant-layout-content .ant-card-bordered { 
                    border: unset !important; 
                }
                .home-page { 
                    height: 100% !important; 
                }
            `);
        }
        
        // 主题设置
        if (config.theme === 'dark') {
            styles.push(`
                body { 
                    background-color: #141414 !important; 
                    color: #ffffff !important; 
                }
                .ant-layout-content { 
                    background-color: #141414 !important; 
                }
            `);
        }
        
        // 自定义CSS
        if (config.customCSS) {
            styles.push(config.customCSS);
        }
        
        return styles.join('\n');
    }

    /**
     * 应用嵌入样式
     */
    function applyEmbedStyles(config) {
        // 移除现有样式
        if (styleElement) {
            styleElement.remove();
        }
        
        // 创建新样式
        const styles = generateEmbedStyles(config);
        if (styles) {
            styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.id = 'biominer-embed-styles';
            styleElement.appendChild(document.createTextNode(styles));
            document.head.appendChild(styleElement);
        }
        
        // 添加嵌入模式标识
        if (isEmbedMode) {
            document.body.classList.add('biominer-embed-mode');
        }
    }

    /**
     * 更新配置
     */
    function updateConfig(newConfig) {
        currentConfig = { ...currentConfig, ...newConfig };
        applyEmbedStyles(currentConfig);
        
        if (currentConfig.debug) {
            console.log('[BioMiner Embed] Config updated:', currentConfig);
        }
    }

    /**
     * 发送消息给父页面
     */
    function sendMessageToParent(type, data = {}) {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({
                type: `biominer:${type}`,
                source: 'biominer-embed',
                data: data
            }, '*');
        }
    }

    /**
     * 处理来自父页面的消息
     */
    function handleParentMessage(event) {
        // 安全检查：确保消息来源可信
        if (event.source !== window.parent) {
            return;
        }
        
        const { type, data } = event.data;
        
        if (!type || !type.startsWith('biominer:')) {
            return;
        }
        
        const messageType = type.replace('biominer:', '');
        
        switch (messageType) {
            case 'config':
                updateConfig(data);
                sendMessageToParent('config-updated', currentConfig);
                break;
                
            case 'get-config':
                sendMessageToParent('config', currentConfig);
                break;
                
            case 'reload':
                window.location.reload();
                break;
                
            case 'navigate':
                if (data.url) {
                    window.location.href = data.url;
                }
                break;
                
            default:
                if (currentConfig.debug) {
                    console.log('[BioMiner Embed] Unknown message type:', messageType);
                }
        }
    }

    /**
     * 初始化嵌入功能
     */
    function initializeEmbed() {
        // 检查是否在iframe中
        isEmbedMode = window.parent !== window;
        
        // 解析URL参数
        const urlParams = parseURLParams();
        
        // 合并配置
        updateConfig(urlParams);
        
        // 监听父页面消息
        window.addEventListener('message', handleParentMessage);
        
        // 发送初始化完成消息
        if (isEmbedMode) {
            sendMessageToParent('ready', {
                config: currentConfig,
                url: window.location.href,
                title: document.title
            });
        }
        
        // 监听页面变化
        const observer = new MutationObserver(() => {
            if (isEmbedMode) {
                sendMessageToParent('page-changed', {
                    url: window.location.href,
                    title: document.title
                });
            }
        });
        
        observer.observe(document, {
            subtree: true,
            childList: true
        });
        
        if (currentConfig.debug) {
            console.log('[BioMiner Embed] Initialized with config:', currentConfig);
        }
    }

    /**
     * 页面加载完成后初始化
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeEmbed);
    } else {
        initializeEmbed();
    }

    // 暴露API给外部使用
    window.BioMinerEmbed = {
        updateConfig,
        getConfig: () => currentConfig,
        sendMessage: sendMessageToParent,
        isEmbedMode: () => isEmbedMode
    };

})();