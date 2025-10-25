"use strict";(self.webpackChunkbiominer_indexd_studio=self.webpackChunkbiominer_indexd_studio||[]).push([[8600],{90044:function(Oo,_,Ze){var we;we={value:!0};var Je=Ze(67294),O=Ze(35480);function Ke(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function It(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var Y,o=It(Je),m=Ke(Je),u=Ke(O);function oe(e,t){return e[t]}function Tt(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function Mt(e=[],t,n="id"){const a=e.slice(),l=oe(t,n);return l?a.splice(a.findIndex(i=>oe(i,n)===l),1):a.splice(a.findIndex(i=>i===t),1),a}function Xe(e){return e.map((t,n)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=n+1),a})}function ue(e,t){return Math.ceil(e/t)}function De(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(Y||(Y={}));const k=()=>null;function qe(e,t=[],n=[]){let a={},l=[...n];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(l=[...l,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{conditionalStyle:a,classNames:l.join(" ")}}function xe(e,t=[],n="id"){const a=oe(e,n);return a?t.some(l=>oe(l,n)===a):t.some(l=>l===e)}function Ce(e,t){return t?e.findIndex(n=>pe(n.id,t)):-1}function pe(e,t){return e==t}function _t(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:l,rowCount:i,mergeSelections:s}=t,g=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const C=g?[...e.selectedRows,...l.filter(p=>!xe(p,e.selectedRows,a))]:e.selectedRows.filter(p=>!xe(p,l,a));return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:C.length,selectedRows:C,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:g,selectedCount:g?i:0,selectedRows:g?l:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:l,isSelected:i,rowCount:s,singleSelect:g}=t;return g?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[l],toggleOnSelectedRowsChange:n}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:Mt(e.selectedRows,l,a),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:Tt(e.selectedRows,l),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:l,totalRows:i,mergeSelections:s}=t;if(s){const g=[...e.selectedRows,...l.filter(b=>!xe(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:g.length,allSelected:!1,selectedRows:g,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:l.length,allSelected:l.length===i,selectedRows:l,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:l,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:l,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:a,paginationServer:l,visibleOnly:i,persistSelectedOnPageChange:s}=t,g=l&&s,b=l&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),g&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:l}=t;return Object.assign(Object.assign({},e),{currentPage:l,rowsPerPage:a})}}}const Lt=O.css`
	pointer-events: none;
	opacity: 0.4;
`,At=u.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&Lt};
	${({theme:e})=>e.table.style};
`,Nt=O.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,zt=u.default.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&Nt};
	${({theme:e})=>e.head.style};
`,Wt=u.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Qe=(e,...t)=>O.css`
		@media screen and (max-width: ${599}px) {
			${O.css(e,...t)}
		}
	`,Bt=(e,...t)=>O.css`
		@media screen and (max-width: ${959}px) {
			${O.css(e,...t)}
		}
	`,Gt=(e,...t)=>O.css`
		@media screen and (max-width: ${1280}px) {
			${O.css(e,...t)}
		}
	`,Vt=e=>(t,...n)=>O.css`
			@media screen and (max-width: ${e}px) {
				${O.css(t,...n)}
			}
		`,ae=u.default.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,et=u.default(ae)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&O.css`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&Qe`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&Bt`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&Gt`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&Vt(e)`
    display: none;
  `};
`,Ut=O.css`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Yt=u.default(et).attrs(e=>({style:e.style}))`
	${({$renderAsCell:e})=>!e&&Ut};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var Zt=o.memo(function({id:e,column:t,row:n,rowIndex:a,dataTag:l,isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:C,onDragLeave:p}){const{conditionalStyle:f,classNames:F}=qe(n,t.conditionalCellStyles,["rdt_TableCell"]);return o.createElement(Yt,{id:e,"data-column-id":t.id,role:"cell",className:F,"data-tag":l,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:f,$isDragging:i,onDragStart:s,onDragOver:g,onDragEnd:b,onDragEnter:C,onDragLeave:p},!t.cell&&o.createElement("div",{"data-tag":l},function(y,S,H,w){return S?H&&typeof H=="function"?H(y,w):S(y,w):null}(n,t.selector,t.format,a)),t.cell&&t.cell(n,a,t,e))});const tt="input";var nt=o.memo(function({name:e,component:t=tt,componentOptions:n={style:{}},indeterminate:a=!1,checked:l=!1,disabled:i=!1,onClick:s=k}){const g=t,b=g!==tt?n.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),C=o.useMemo(()=>function(p,...f){let F;return Object.keys(p).map(y=>p[y]).forEach((y,S)=>{typeof y=="function"&&(F=Object.assign(Object.assign({},p),{[Object.keys(p)[S]]:y(...f)}))}),F||p}(n,a),[n,a]);return o.createElement(g,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=a)},style:b,onClick:i?k:s,name:e,"aria-label":e,checked:l,disabled:i},C,{onChange:k}))});const Jt=u.default(ae)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Kt({name:e,keyField:t,row:n,rowCount:a,selected:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:g,selectableRowDisabled:b,onSelectedRow:C}){const p=!(!b||!b(n));return o.createElement(Jt,{onClick:f=>f.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},o.createElement(nt,{name:e,component:i,componentOptions:s,checked:l,"aria-checked":l,onClick:()=>{C({type:"SELECT_SINGLE_ROW",row:n,isSelected:l,keyField:t,rowCount:a,singleSelect:g})},disabled:p}))}const Xt=u.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function qt({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:a,row:l,onToggled:i}){const s=t?n.expanded:n.collapsed;return o.createElement(Xt,{"aria-disabled":e,onClick:()=>i&&i(l),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const Qt=u.default(ae)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function en({row:e,expanded:t=!1,expandableIcon:n,id:a,onToggled:l,disabled:i=!1}){return o.createElement(Qt,{onClick:s=>s.stopPropagation(),$noPadding:!0},o.createElement(qt,{id:a,row:e,expanded:t,expandableIcon:n,disabled:i,onToggled:l}))}const tn=u.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var nn=o.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:a,extendedClassNames:l}){const i=["rdt_ExpanderRow",...l.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return o.createElement(tn,{className:i,$extendedRowStyle:a},o.createElement(t,Object.assign({data:e},n)))});const ve="allowRowEvents";var He,je,Fe;_.Nm=void 0,(He=_.Nm||(_.Nm={})).LTR="ltr",He.RTL="rtl",He.AUTO="auto",_.v2=void 0,(je=_.v2||(_.v2={})).LEFT="left",je.RIGHT="right",je.CENTER="center",_.pU=void 0,(Fe=_.pU||(_.pU={})).SM="sm",Fe.MD="md",Fe.LG="lg";const on=O.css`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,an=O.css`
	&:hover {
		cursor: pointer;
	}
`,ln=u.default.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&on};
	${({$pointerOnHover:e})=>e&&an};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function rn({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:a=!1,dense:l=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:g,expandableRowsComponentProps:b,expandableRowsHideExpander:C,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:f=!1,highlightOnHover:F=!1,id:y,expandableInheritConditionalStyles:S,keyField:H,onRowClicked:w=k,onRowDoubleClicked:P=k,onRowMouseEnter:j=k,onRowMouseLeave:R=k,onRowExpandToggled:E=k,onSelectedRow:M=k,pointerOnHover:L=!1,row:x,rowCount:v,rowIndex:Z,selectableRowDisabled:A=null,selectableRows:W=!1,selectableRowsComponent:J,selectableRowsComponentProps:$,selectableRowsHighlight:re=!1,selectableRowsSingle:me=!1,selected:ie,striped:se=!1,draggingColumnId:Te,onDragStart:Me,onDragOver:_e,onDragEnd:Le,onDragEnter:V,onDragLeave:Re}){const[U,Se]=o.useState(n);o.useEffect(()=>{Se(n)},[n]);const ee=o.useCallback(()=>{Se(!U),E(!U,x)},[U,E,x]),Ae=L||s&&(p||f),Ne=o.useCallback(D=>{D.target.getAttribute("data-tag")===ve&&(w(x,D),!a&&s&&p&&ee())},[a,p,s,ee,w,x]),Ee=o.useCallback(D=>{D.target.getAttribute("data-tag")===ve&&(P(x,D),!a&&s&&f&&ee())},[a,f,s,ee,P,x]),ze=o.useCallback(D=>{j(x,D)},[j,x]),K=o.useCallback(D=>{R(x,D)},[R,x]),te=oe(x,H),{conditionalStyle:Oe,classNames:$e}=qe(x,t,["rdt_TableRow"]),We=re&&ie,Be=S?Oe:{},Ge=se&&Z%2==0;return o.createElement(o.Fragment,null,o.createElement(ln,{id:`row-${y}`,role:"row",$striped:Ge,$highlightOnHover:F,$pointerOnHover:!a&&Ae,$dense:l,onClick:Ne,onDoubleClick:Ee,onMouseEnter:ze,onMouseLeave:K,className:$e,$selected:We,$conditionalStyle:Oe},W&&o.createElement(Kt,{name:`select-row-${te}`,keyField:H,row:x,rowCount:v,selected:ie,selectableRowsComponent:J,selectableRowsComponentProps:$,selectableRowDisabled:A,selectableRowsSingle:me,onSelectedRow:M}),s&&!C&&o.createElement(en,{id:te,expandableIcon:i,expanded:U,row:x,onToggled:ee,disabled:a}),e.map(D=>D.omit?null:o.createElement(Zt,{id:`cell-${D.id}-${te}`,key:`cell-${D.id}-${te}`,dataTag:D.ignoreRowClick||D.button?null:ve,column:D,row:x,rowIndex:Z,isDragging:pe(Te,D.id),onDragStart:Me,onDragOver:_e,onDragEnd:Le,onDragEnter:V,onDragLeave:Re}))),s&&U&&o.createElement(nn,{key:`expander-${te}`,data:x,extendedRowStyle:Be,extendedClassNames:$e,ExpanderComponent:g,expanderComponentProps:b}))}const sn=u.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,dn=({sortActive:e,sortDirection:t})=>m.default.createElement(sn,{$sortActive:e,$sortDirection:t},"\u25B2"),cn=u.default(et)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,gn=O.css`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&O.css`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,un=u.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&gn};
`,pn=u.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var bn=o.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:a={},sortDirection:l,sortIcon:i,sortServer:s,pagination:g,paginationServer:b,persistSelectedOnSort:C,selectableRowsVisibleOnly:p,onSort:f,onDragStart:F,onDragOver:y,onDragEnd:S,onDragEnter:H,onDragLeave:w}){o.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[P,j]=o.useState(!1),R=o.useRef(null);if(o.useEffect(()=>{R.current&&j(R.current.scrollWidth>R.current.clientWidth)},[P]),e.omit)return null;const E=()=>{if(!e.sortable&&!e.selector)return;let $=l;pe(a.id,e.id)&&($=l===Y.ASC?Y.DESC:Y.ASC),f({type:"SORT_CHANGE",sortDirection:$,selectedColumn:e,clearSelectedOnSort:g&&b&&!C||s||p})},M=$=>o.createElement(dn,{sortActive:$,sortDirection:l}),L=()=>o.createElement("span",{className:[l,"__rdt_custom_sort_icon__"].join(" ")},i),x=!(!e.sortable||!pe(a.id,e.id)),v=!e.sortable||t,Z=e.sortable&&!i&&!e.right,A=e.sortable&&!i&&e.right,W=e.sortable&&i&&!e.right,J=e.sortable&&i&&e.right;return o.createElement(cn,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:pe(e.id,n),onDragStart:F,onDragOver:y,onDragEnd:S,onDragEnter:H,onDragLeave:w},e.name&&o.createElement(un,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:v?void 0:E,onKeyPress:v?void 0:$=>{$.key==="Enter"&&E()},$sortActive:!v&&x,disabled:v},!v&&J&&L(),!v&&A&&M(x),typeof e.name=="string"?o.createElement(pn,{title:P?e.name:void 0,ref:R,"data-column-id":e.id},e.name):e.name,!v&&W&&L(),!v&&Z&&M(x)))});const mn=u.default(ae)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function fn({headCell:e=!0,rowData:t,keyField:n,allSelected:a,mergeSelections:l,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:g,selectableRowDisabled:b,onSelectAllRows:C}){const p=i.length>0&&!a,f=b?t.filter(S=>!b(S)):t,F=f.length===0,y=Math.min(t.length,f.length);return o.createElement(mn,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},o.createElement(nt,{name:"select-all-rows",component:s,componentOptions:g,onClick:()=>{C({type:"SELECT_ALL_ROWS",rows:f,rowCount:y,mergeSelections:l,keyField:n})},checked:a,indeterminate:p,disabled:F}))}function ot(e=_.Nm.AUTO){const t=typeof window=="object",[n,a]=o.useState(!1);return o.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const l=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],g=i.dir==="rtl"||s.dir==="rtl";a(l&&g)}},[e,t]),n}const hn=u.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,wn=u.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,at=u.default.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function xn({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:a,direction:l}){const i=ot(l),s=a>0;return n?o.createElement(at,{$visible:s},o.cloneElement(n,{selectedCount:a})):o.createElement(at,{$visible:s,$rtl:i},o.createElement(hn,null,((g,b,C)=>{if(b===0)return null;const p=b===1?g.singular:g.plural;return C?`${b} ${g.message||""} ${p}`:`${b} ${p} ${g.message||""}`})(e,a,i)),o.createElement(wn,null,t))}const Cn=u.default.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,vn=u.default.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,yn=u.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Rn=({title:e,actions:t=null,contextMessage:n,contextActions:a,contextComponent:l,selectedCount:i,direction:s,showMenu:g=!0})=>o.createElement(Cn,{className:"rdt_TableHeader",role:"heading","aria-level":1},o.createElement(vn,null,e),t&&o.createElement(yn,null,t),g&&o.createElement(xn,{contextMessage:n,contextActions:a,contextComponent:l,direction:s,selectedCount:i}));function lt(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}typeof SuppressedError=="function"&&SuppressedError;const Sn={left:"flex-start",right:"flex-end",center:"center"},En=u.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Sn[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,On=e=>{var{align:t="right",wrapContent:n=!0}=e,a=lt(e,["align","wrapContent"]);return o.createElement(En,Object.assign({align:t,$wrapContent:n},a))},$n=u.default.div`
	display: flex;
	flex-direction: column;
`,kn=u.default.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&O.css`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&O.css`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,rt=u.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Pn=u.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Dn=u.default(ae)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Hn=u.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,jn=()=>m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.default.createElement("path",{d:"M7 10l5 5 5-5z"}),m.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Fn=u.default.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,In=u.default.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Tn=e=>{var{defaultValue:t,onChange:n}=e,a=lt(e,["defaultValue","onChange"]);return o.createElement(In,null,o.createElement(Fn,Object.assign({onChange:n,defaultValue:t},a)),o.createElement(jn,null))},r={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return m.default.createElement("div",null,"To add an expander pass in a component instance via ",m.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:m.default.createElement(()=>m.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),m.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:m.default.createElement(()=>m.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),m.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:m.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:m.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:_.v2.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:m.default.createElement(()=>m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),m.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:m.default.createElement(()=>m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),m.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:m.default.createElement(()=>m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),m.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:m.default.createElement(()=>m.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),m.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:_.Nm.AUTO,onChangePage:k,onChangeRowsPerPage:k,onRowClicked:k,onRowDoubleClicked:k,onRowMouseEnter:k,onRowMouseLeave:k,onRowExpandToggled:k,onSelectedRowsChange:k,onSort:k,onColumnOrderChange:k},Mn={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},_n=u.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,ye=u.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Ln=u.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Qe`
    width: 100%;
    justify-content: space-around;
  `};
`,it=u.default.span`
	flex-shrink: 1;
	user-select: none;
`,An=u.default(it)`
	margin: 0 24px;
`,Nn=u.default(it)`
	margin: 0 4px;
`;var zn=o.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:a=r.direction,paginationRowsPerPageOptions:l=r.paginationRowsPerPageOptions,paginationIconLastPage:i=r.paginationIconLastPage,paginationIconFirstPage:s=r.paginationIconFirstPage,paginationIconNext:g=r.paginationIconNext,paginationIconPrevious:b=r.paginationIconPrevious,paginationComponentOptions:C=r.paginationComponentOptions,onChangeRowsPerPage:p=r.onChangeRowsPerPage,onChangePage:f=r.onChangePage}){const F=(()=>{const $=typeof window=="object";function re(){return{width:$?window.innerWidth:void 0,height:$?window.innerHeight:void 0}}const[me,ie]=o.useState(re);return o.useEffect(()=>{if(!$)return()=>null;function se(){ie(re())}return window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)},[]),me})(),y=ot(a),S=F.width&&F.width>599,H=ue(t,e),w=n*e,P=w-e+1,j=n===1,R=n===H,E=Object.assign(Object.assign({},Mn),C),M=n===H?`${P}-${t} ${E.rangeSeparatorText} ${t}`:`${P}-${w} ${E.rangeSeparatorText} ${t}`,L=o.useCallback(()=>f(n-1),[n,f]),x=o.useCallback(()=>f(n+1),[n,f]),v=o.useCallback(()=>f(1),[f]),Z=o.useCallback(()=>f(ue(t,e)),[f,t,e]),A=o.useCallback($=>p(Number($.target.value),n),[n,p]),W=l.map($=>o.createElement("option",{key:$,value:$},$));E.selectAllRowsItem&&W.push(o.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const J=o.createElement(Tn,{onChange:A,defaultValue:e,"aria-label":E.rowsPerPageText},W);return o.createElement(_n,{className:"rdt_Pagination"},!E.noRowsPerPage&&S&&o.createElement(o.Fragment,null,o.createElement(Nn,null,E.rowsPerPageText),J),S&&o.createElement(An,null,M),o.createElement(Ln,null,o.createElement(ye,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":j,onClick:v,disabled:j,$isRTL:y},s),o.createElement(ye,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":j,onClick:L,disabled:j,$isRTL:y},b),!E.noRowsPerPage&&!S&&J,o.createElement(ye,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":R,onClick:x,disabled:R,$isRTL:y},g),o.createElement(ye,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":R,onClick:Z,disabled:R,$isRTL:y},i)))});const Q=(e,t)=>{const n=o.useRef(!0);o.useEffect(()=>{n.current?n.current=!1:e()},t)};function Wn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bn=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(a){return a.$$typeof===Gn}(t)}(e)},Gn=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function be(e,t){return t.clone!==!1&&t.isMergeableObject(e)?le((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Vn(e,t,n){return e.concat(t).map(function(a){return be(a,n)})}function st(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return Object.propertyIsEnumerable.call(t,n)}):[]}(e))}function dt(e,t){try{return t in e}catch(n){return!1}}function Un(e,t,n){var a={};return n.isMergeableObject(e)&&st(e).forEach(function(l){a[l]=be(e[l],n)}),st(t).forEach(function(l){(function(i,s){return dt(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,l)||(dt(e,l)&&n.isMergeableObject(t[l])?a[l]=function(i,s){if(!s.customMerge)return le;var g=s.customMerge(i);return typeof g=="function"?g:le}(l,n)(e[l],t[l],n):a[l]=be(t[l],n))}),a}function le(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Vn,n.isMergeableObject=n.isMergeableObject||Bn,n.cloneUnlessOtherwiseSpecified=be;var a=Array.isArray(t);return a===Array.isArray(e)?a?n.arrayMerge(e,t,n):Un(e,t,n):be(t,n)}le.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,a){return le(n,a,t)},{})};var Ie=Wn(le);const ct={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},G={default:ct,light:ct,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Yn(e,t,n,a){const[l,i]=o.useState(()=>Xe(e)),[s,g]=o.useState(""),b=o.useRef("");Q(()=>{i(Xe(e))},[e]);const C=o.useCallback(w=>{var P,j,R;const{attributes:E}=w.target,M=(P=E.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;M&&(b.current=((R=(j=l[Ce(l,M)])===null||j===void 0?void 0:j.id)===null||R===void 0?void 0:R.toString())||"",g(b.current))},[l]),p=o.useCallback(w=>{var P;const{attributes:j}=w.target,R=(P=j.getNamedItem("data-column-id"))===null||P===void 0?void 0:P.value;if(R&&b.current&&R!==b.current){const E=Ce(l,b.current),M=Ce(l,R),L=[...l];L[E]=l[M],L[M]=l[E],i(L),t(L)}},[t,l]),f=o.useCallback(w=>{w.preventDefault()},[]),F=o.useCallback(w=>{w.preventDefault()},[]),y=o.useCallback(w=>{w.preventDefault(),b.current="",g("")},[]),S=function(w=!1){return w?Y.ASC:Y.DESC}(a),H=o.useMemo(()=>l[Ce(l,n==null?void 0:n.toString())]||{},[n,l]);return{tableColumns:l,draggingColumnId:s,handleDragStart:C,handleDragEnter:p,handleDragOver:f,handleDragLeave:F,handleDragEnd:y,defaultSortDirection:S,defaultSortColumn:H}}var Zn=o.memo(function(e){const{data:t=r.data,columns:n=r.columns,title:a=r.title,actions:l=r.actions,keyField:i=r.keyField,striped:s=r.striped,highlightOnHover:g=r.highlightOnHover,pointerOnHover:b=r.pointerOnHover,dense:C=r.dense,selectableRows:p=r.selectableRows,selectableRowsSingle:f=r.selectableRowsSingle,selectableRowsHighlight:F=r.selectableRowsHighlight,selectableRowsNoSelectAll:y=r.selectableRowsNoSelectAll,selectableRowsVisibleOnly:S=r.selectableRowsVisibleOnly,selectableRowSelected:H=r.selectableRowSelected,selectableRowDisabled:w=r.selectableRowDisabled,selectableRowsComponent:P=r.selectableRowsComponent,selectableRowsComponentProps:j=r.selectableRowsComponentProps,onRowExpandToggled:R=r.onRowExpandToggled,onSelectedRowsChange:E=r.onSelectedRowsChange,expandableIcon:M=r.expandableIcon,onChangeRowsPerPage:L=r.onChangeRowsPerPage,onChangePage:x=r.onChangePage,paginationServer:v=r.paginationServer,paginationServerOptions:Z=r.paginationServerOptions,paginationTotalRows:A=r.paginationTotalRows,paginationDefaultPage:W=r.paginationDefaultPage,paginationResetDefaultPage:J=r.paginationResetDefaultPage,paginationPerPage:$=r.paginationPerPage,paginationRowsPerPageOptions:re=r.paginationRowsPerPageOptions,paginationIconLastPage:me=r.paginationIconLastPage,paginationIconFirstPage:ie=r.paginationIconFirstPage,paginationIconNext:se=r.paginationIconNext,paginationIconPrevious:Te=r.paginationIconPrevious,paginationComponent:Me=r.paginationComponent,paginationComponentOptions:_e=r.paginationComponentOptions,responsive:Le=r.responsive,progressPending:V=r.progressPending,progressComponent:Re=r.progressComponent,persistTableHead:U=r.persistTableHead,noDataComponent:Se=r.noDataComponent,disabled:ee=r.disabled,noTableHead:Ae=r.noTableHead,noHeader:Ne=r.noHeader,fixedHeader:Ee=r.fixedHeader,fixedHeaderScrollHeight:ze=r.fixedHeaderScrollHeight,pagination:K=r.pagination,subHeader:te=r.subHeader,subHeaderAlign:Oe=r.subHeaderAlign,subHeaderWrap:$e=r.subHeaderWrap,subHeaderComponent:We=r.subHeaderComponent,noContextMenu:Be=r.noContextMenu,contextMessage:Ge=r.contextMessage,contextActions:D=r.contextActions,contextComponent:Jn=r.contextComponent,expandableRows:ke=r.expandableRows,onRowClicked:gt=r.onRowClicked,onRowDoubleClicked:ut=r.onRowDoubleClicked,onRowMouseEnter:pt=r.onRowMouseEnter,onRowMouseLeave:bt=r.onRowMouseLeave,sortIcon:Kn=r.sortIcon,onSort:Xn=r.onSort,sortFunction:mt=r.sortFunction,sortServer:Ve=r.sortServer,expandableRowsComponent:qn=r.expandableRowsComponent,expandableRowsComponentProps:Qn=r.expandableRowsComponentProps,expandableRowDisabled:ft=r.expandableRowDisabled,expandableRowsHideExpander:ht=r.expandableRowsHideExpander,expandOnRowClicked:eo=r.expandOnRowClicked,expandOnRowDoubleClicked:to=r.expandOnRowDoubleClicked,expandableRowExpanded:wt=r.expandableRowExpanded,expandableInheritConditionalStyles:no=r.expandableInheritConditionalStyles,defaultSortFieldId:oo=r.defaultSortFieldId,defaultSortAsc:ao=r.defaultSortAsc,clearSelectedRows:xt=r.clearSelectedRows,conditionalRowStyles:lo=r.conditionalRowStyles,theme:Ct=r.theme,customStyles:vt=r.customStyles,direction:fe=r.direction,onColumnOrderChange:ro=r.onColumnOrderChange,className:io,ariaLabel:yt}=e,{tableColumns:Rt,draggingColumnId:St,handleDragStart:Et,handleDragEnter:Ot,handleDragOver:$t,handleDragLeave:kt,handleDragEnd:Pt,defaultSortDirection:so,defaultSortColumn:co}=Yn(n,ro,oo,ao),[{rowsPerPage:X,currentPage:N,selectedRows:Ue,allSelected:Dt,selectedCount:Ht,selectedColumn:B,sortDirection:de,toggleOnSelectedRowsChange:go},ne]=o.useReducer(_t,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:co,toggleOnSelectedRowsChange:!1,sortDirection:so,currentPage:W,rowsPerPage:$,selectedRowsFlag:!1,contextMessage:r.contextMessage}),{persistSelectedOnSort:jt=!1,persistSelectedOnPageChange:Pe=!1}=Z,Ft=!(!v||!Pe&&!jt),uo=K&&!V&&t.length>0,po=Me||zn,bo=o.useMemo(()=>((d={},h="default",T="default")=>{const z=G[h]?h:T;return Ie({table:{style:{color:(c=G[z]).text.primary,backgroundColor:c.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:c.text.primary,backgroundColor:c.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:c.background.default,minHeight:"52px"}},head:{style:{color:c.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:c.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:c.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:c.context.background,fontSize:"18px",fontWeight:400,color:c.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:c.text.primary,backgroundColor:c.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:c.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:c.selected.text,backgroundColor:c.selected.default,borderBottomColor:c.background.default}},highlightOnHoverStyle:{color:c.highlightOnHover.text,backgroundColor:c.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:c.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:c.background.default},stripedStyle:{color:c.striped.text,backgroundColor:c.striped.default}},expanderRow:{style:{color:c.text.primary,backgroundColor:c.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:c.button.default,fill:c.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:c.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:c.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:c.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:c.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:c.button.default,fill:c.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:c.button.disabled,fill:c.button.disabled},"&:hover:not(:disabled)":{backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}}},d);var c})(vt,Ct),[vt,Ct]),mo=o.useMemo(()=>Object.assign({},fe!=="auto"&&{dir:fe}),[fe]),I=o.useMemo(()=>{if(Ve)return t;if(B!=null&&B.sortFunction&&typeof B.sortFunction=="function"){const d=B.sortFunction,h=de===Y.ASC?d:(T,z)=>-1*d(T,z);return[...t].sort(h)}return function(d,h,T,z){return h?z&&typeof z=="function"?z(d.slice(0),h,T):d.slice(0).sort((c,Ye)=>{const ge=h(c),q=h(Ye);if(T==="asc"){if(ge<q)return-1;if(ge>q)return 1}if(T==="desc"){if(ge>q)return-1;if(ge<q)return 1}return 0}):d}(t,B==null?void 0:B.selector,de,mt)},[Ve,B,de,t,mt]),he=o.useMemo(()=>{if(K&&!v){const d=N*X,h=d-X;return I.slice(h,d)}return I},[N,K,v,X,I]),fo=o.useCallback(d=>{ne(d)},[]),ho=o.useCallback(d=>{ne(d)},[]),wo=o.useCallback(d=>{ne(d)},[]),xo=o.useCallback((d,h)=>gt(d,h),[gt]),Co=o.useCallback((d,h)=>ut(d,h),[ut]),vo=o.useCallback((d,h)=>pt(d,h),[pt]),yo=o.useCallback((d,h)=>bt(d,h),[bt]),ce=o.useCallback(d=>ne({type:"CHANGE_PAGE",page:d,paginationServer:v,visibleOnly:S,persistSelectedOnPageChange:Pe}),[v,Pe,S]),Ro=o.useCallback(d=>{const h=ue(A||he.length,d),T=De(N,h);v||ce(T),ne({type:"CHANGE_ROWS_PER_PAGE",page:T,rowsPerPage:d})},[N,ce,v,A,he.length]);if(K&&!v&&I.length>0&&he.length===0){const d=ue(I.length,X),h=De(N,d);ce(h)}Q(()=>{E({allSelected:Dt,selectedCount:Ht,selectedRows:Ue.slice(0)})},[go]),Q(()=>{Xn(B,de,I.slice(0))},[B,de]),Q(()=>{x(N,A||I.length)},[N]),Q(()=>{L(X,N)},[X]),Q(()=>{ce(W)},[W,J]),Q(()=>{if(K&&v&&A>0){const d=ue(A,X),h=De(N,d);N!==h&&ce(h)}},[A]),o.useEffect(()=>{ne({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:xt})},[f,xt]),o.useEffect(()=>{if(!H)return;const d=I.filter(T=>H(T)),h=f?d.slice(0,1):d;ne({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:h,totalRows:I.length,mergeSelections:Ft})},[t,H]);const So=S?he:I,Eo=Pe||f||y;return o.createElement(O.ThemeProvider,{theme:bo},!Ne&&(!!a||!!l)&&o.createElement(Rn,{title:a,actions:l,showMenu:!Be,selectedCount:Ht,direction:fe,contextActions:D,contextComponent:Jn,contextMessage:Ge}),te&&o.createElement(On,{align:Oe,wrapContent:$e},We),o.createElement(kn,Object.assign({$responsive:Le,$fixedHeader:Ee,$fixedHeaderScrollHeight:ze,className:io},mo),o.createElement(Pn,null,V&&!U&&o.createElement(rt,null,Re),o.createElement(At,Object.assign({disabled:ee,className:"rdt_Table",role:"table"},yt&&{"aria-label":yt}),!Ae&&(!!U||I.length>0&&!V)&&o.createElement(zt,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:Ee},o.createElement(Wt,{className:"rdt_TableHeadRow",role:"row",$dense:C},p&&(Eo?o.createElement(ae,{style:{flex:"0 0 48px"}}):o.createElement(fn,{allSelected:Dt,selectedRows:Ue,selectableRowsComponent:P,selectableRowsComponentProps:j,selectableRowDisabled:w,rowData:So,keyField:i,mergeSelections:Ft,onSelectAllRows:ho})),ke&&!ht&&o.createElement(Dn,null),Rt.map(d=>o.createElement(bn,{key:d.id,column:d,selectedColumn:B,disabled:V||I.length===0,pagination:K,paginationServer:v,persistSelectedOnSort:jt,selectableRowsVisibleOnly:S,sortDirection:de,sortIcon:Kn,sortServer:Ve,onSort:fo,onDragStart:Et,onDragOver:$t,onDragEnd:Pt,onDragEnter:Ot,onDragLeave:kt,draggingColumnId:St})))),!I.length&&!V&&o.createElement(Hn,null,Se),V&&U&&o.createElement(rt,null,Re),!V&&I.length>0&&o.createElement($n,{className:"rdt_TableBody",role:"rowgroup"},he.map((d,h)=>{const T=oe(d,i),z=function(q=""){return typeof q!="number"&&(!q||q.length===0)}(T)?h:T,c=xe(d,Ue,i),Ye=!!(ke&&wt&&wt(d)),ge=!!(ke&&ft&&ft(d));return o.createElement(rn,{id:z,key:z,keyField:i,"data-row-id":z,columns:Rt,row:d,rowCount:I.length,rowIndex:h,selectableRows:p,expandableRows:ke,expandableIcon:M,highlightOnHover:g,pointerOnHover:b,dense:C,expandOnRowClicked:eo,expandOnRowDoubleClicked:to,expandableRowsComponent:qn,expandableRowsComponentProps:Qn,expandableRowsHideExpander:ht,defaultExpanderDisabled:ge,defaultExpanded:Ye,expandableInheritConditionalStyles:no,conditionalRowStyles:lo,selected:c,selectableRowsHighlight:F,selectableRowsComponent:P,selectableRowsComponentProps:j,selectableRowDisabled:w,selectableRowsSingle:f,striped:s,onRowExpandToggled:R,onRowClicked:xo,onRowDoubleClicked:Co,onRowMouseEnter:vo,onRowMouseLeave:yo,onSelectedRow:wo,draggingColumnId:St,onDragStart:Et,onDragOver:$t,onDragEnd:Pt,onDragEnter:Ot,onDragLeave:kt})}))))),uo&&o.createElement("div",null,o.createElement(po,{onChangePage:ce,onChangeRowsPerPage:Ro,rowCount:A||I.length,currentPage:N,rowsPerPage:X,direction:fe,paginationRowsPerPageOptions:re,paginationIconLastPage:me,paginationIconFirstPage:ie,paginationIconNext:se,paginationIconPrevious:Te,paginationComponentOptions:_e})))});we=ve,we=function(e="default",t,n="default"){return G[e]||(G[e]=Ie(G[n],t||{})),G[e]=Ie(G[e],t||{}),G[e]},_.ZP=Zn,we=G}}]);
