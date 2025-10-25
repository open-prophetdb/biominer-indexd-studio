"use strict";(self.webpackChunkbiominer_indexd_studio=self.webpackChunkbiominer_indexd_studio||[]).push([[3864],{21449:function(b,i,e){e.r(i),e.d(i,{default:function(){return f}});var w=e(67294),t=e(4393),a=e(38437),s=e(21931),d=e(94272),y={pre:"pre___zH9Yf"},u=e(84702),c=e(23315),l=e(10981),n=e(85893),v=function(o){var p=o.children;return _jsx("pre",{className:styles.pre,children:_jsx("code",{children:_jsx(Typography.Text,{copyable:!0,children:p})})})},r=(0,l.z7)(),h=`
### Intro
`.concat(r,` is a hash-based data indexing and tracking service providing globally unique identifiers. It is a part of [OpenProphetDB](https://www.prophetdb.org) project. The service provides a unified interface for managing and mining disease associated omics data.

We will release our data to multiple repo (such as [NODE](https://www.biosino.org/node/), [GSA](https://ngdc.cncb.ac.cn/gsa/), [SRA](https://www.ncbi.nlm.nih.gov/sra), [ENA](https://www.ebi.ac.uk/ena/browser/) etc.), for your convenience, we provide the `).concat(r,` service for aggregating all these repos.

### Features 

- [x] Manage & retrieve files: index each file by UUID (e.g. biominer.fudan-pgx/b14563ac-dbc1-49e8-b484-3dad89de1a54) and record all repository locations, file names, MD5 values, DOI numbers, repository links, version numbers, sizes, etc. of files 

- [x] Track file location: provide a mechanism to register & track file location, for the same file released in multiple repositories (OSS, S3, GSA, NODE, SRA, ENA.) 

- [x] Manage multi-version files: provide Base UUID indexing of different versions of files (i.e., get the Base UUID, you can query all the historical versions of a file in the system) for different versions of Pipeline analysis to generate multiple versions of Level2/3 files. 

- [x] Bulk get download links: query specified files by UUID/MD5 and get download links of specified repositories. It is better to use with [biopoem](https://github.com/yjcyxky/biopoem). 

- [ ] Track file status: whether the file is in the index, or has been deleted, or has been updated, or can be downloaded. 

- [ ] More features... 


If you have any questions or suggestions, please access [our website](https://www.prophetdb.org) for support.

### How to download the omics data files?

Download biominer-aget binary from [BioMiner Aget for Linux](https://www.indexd.org/biominer-aget/biominer-aget-x86_64-linux), [BioMiner Aget for Mac](https://www.indexd.org/biominer-aget/biominer-aget-x86_64-mac), [BioMiner Aget for Windows](https://www.indexd.org/biominer-aget/biominer-aget-x86_64-windows), [BioMiner Aget for Mac ARM64](https://www.indexd.org/biominer-aget/biominer-aget-x86_64-mac-arm64)

Copy the biominer-aget binary into /usr/bin/biominer-aget or any other directory which in PATH variable.

e.g. you want to download the file with UUID \`00006134-c655-4bbe-9144-0ee86da83902\` or Hash (such as md5sum, sha128...) \`b02ced3319ba35746e2436d67b04a42c\` from the repository biominer.fudan-pgx, you can run the following command:

\`\`\`bash
biominer-aget --guid biominer.fudan-pgx/00006134-c655-4bbe-9144-0ee86da83902 --output-dir ~/Downloads/ --repo gsa --chunk_size 1m --concurrency 1000

## or

biominer-aget --hash b02ced3319ba35746e2436d67b04a42c --output-dir ~/Downloads/ --repo gsa --chunk_size 1m --concurrency 1000

## NODE doesn't support http range, so the --chunk_size and --concurrency arguments don't work for it.

biominer-aget --hash b02ced3319ba35746e2436d67b04a42c --output-dir ~/Downloads/ --repo node
\`\`\`

> Please note that:
> 1. The \`chunk_size\` and \`concurrency\` parameters are related with the download speed. **There may be tens or hundreds of times the difference, so it's worth taking some time to find the best one.**
> 2. The biominer-aget binary is not available for Windows.
> 3. Not each file can be found in all these repos, so you need to specify a repo name when you downloading expected file.

\`\`\`bash
$ biominer-aget --help
Biominer Aget 0.3.7
Jingcheng Yang <yjcyxky@163.com>
An Index Engine for Omics Data Files

USAGE:
    biominer-aget [FLAGS] [OPTIONS]

FLAGS:
    -D, --debug      Activate debug mode
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -a, --api-server <api-server>      The api server address
    -k, --chunk_size <chunk_size>      The number ofinterval length of each concurrent request [default: '50m']
    -c, --concurrency <concurrency>    The number of concurrency request [default: 10]
        --dns-timeout <dns-timeout>    DNS Timeout(seconds) of request [default: 10]
    -g, --guid <guid>                  The guid of the file you want to download, e.g. biominer.fudan-pgx/00006134-c655-
                                       4bbe-9144-0ee86da83902
    -H, --hash <hash>                  The hash of the file you want to download, e.g. b47ee06cdf62847f6d4c11bb12ac1ae0
    -o, --output-dir <output-dir>      Output directory [default: ./]
    -p, --password <password>          Password for the biominer api server [default: anonymous]
    -r, --repo <repo>                  Which data repository you want to download from [default: node]  [possible
                                       values: node, gsa, s3, oss, minio]
        --retries <retries>            The maximum times of retring [default: 0]
        --retry-wait <retry-wait>      The seconds between retries [default: 0]
    -t, --timeout <timeout>            Timeout(seconds) of request [default: 60]
    -u, --username <username>          Username for the biominer-indexd api server [default: anonymous]
\`\`\`
`),m=function(){var o=(0,d.useIntl)();return(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(a.Z,{message:o.formatMessage({id:"pages.welcome.alertMessage",defaultMessage:"Faster download tool have been released."}),type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),(0,n.jsx)(s.Z.Text,{style:{fontSize:"16px"},children:(0,n.jsx)(u.D,{remarkPlugins:[c.Z],children:h})})]})},f=m}}]);
