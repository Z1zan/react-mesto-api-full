(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(19),s=n.n(o),i=n(12),r=(n(29),n(24)),l=n(2),u=n(3),p=n.p+"static/media/header-logo.a307e1c4.svg",d=n(0);var m=function(e){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{className:"header__container",children:[Object(d.jsx)("img",{className:"header__logo",src:p,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f"}),Object(d.jsxs)("div",{className:"header__text",children:[Object(d.jsx)("a",{onClick:e.onClick,href:e.url,className:"header__logout",children:e.text}),Object(d.jsx)("p",{className:"header__email",children:e.userEmail})]})]}),Object(d.jsx)("div",{className:"header__line"})]})},j=n(11),b=n(14),f=c.a.createContext();var h=function(e){var t=Object(a.useContext)(f),n=e.owner===t._id,c="element__trash ".concat(n?"":"element__trash_hidden"),o=e.likes.some((function(e){return e===t._id})),s="element__like-btn ".concat(o?"element__like-btn_active":""," opacity");return Object(d.jsxs)("div",{className:"element",children:[Object(d.jsx)("img",{className:"element__image",onClick:function(){e.onCardClick(e.card)},src:e.link,alt:e.name}),Object(d.jsxs)("div",{className:"element__text",children:[Object(d.jsx)("p",{className:"element__name",children:e.name}),Object(d.jsx)("button",{className:s,onClick:function(){e.onCardLike(e.card)},type:"button"})]}),Object(d.jsx)("span",{className:"element__like-number",children:e.likes.length}),Object(d.jsx)("button",{className:c,onClick:function(){e.onCardDelete(e.card)},type:"button"})]})};var O=function(e){return Object(d.jsxs)("form",{onSubmit:e.onSubmit,className:"popup popup-".concat(e.name," popup-form ").concat(e.isOpen),name:"".concat(e.name,"Popup"),children:[Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:"popup__close-btn popup-".concat(e.name,"__close-btn opacity"),type:"reset",onClick:e.onClose}),Object(d.jsx)("h2",{className:"popup__title",children:e.title}),Object(d.jsx)(d.Fragment,{children:e.children}),Object(d.jsx)("button",{className:"popup__submit-btn submit-".concat(e.name,"-btn"),type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(d.jsx)("div",{className:"popup__overlay overlay-".concat(e.name)})]})};var x=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1],p=Object(a.useContext)(f);return Object(a.useEffect)((function(){o(p.name||""),u(p.about||"")}),[p]),Object(d.jsxs)(O,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:r})},onClose:e.onClose,isOpen:e.isOpen,name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(d.jsxs)("div",{className:"popup__form",children:[Object(d.jsx)("input",{value:c,onChange:function(e){o(e.target.value)},className:"popup__field popup__field_name",id:"input-name",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),Object(d.jsx)("span",{className:"popup__form-field-error",id:"input-name-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]}),Object(d.jsxs)("div",{className:"popup__form",children:[Object(d.jsx)("input",{value:r,onChange:function(e){u(e.target.value)},className:"popup__field popup__field_job",id:"input-job",type:"text",name:"about",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0,minLength:"2",maxLength:"200"}),Object(d.jsx)("span",{className:"popup__form-field-error",id:"input-job-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})]})};var v=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(d.jsx)(O,{onSubmit:function(t){t.preventDefault(),e.setAvatar({avatar:c}),o("")},onClose:e.onClose,isOpen:e.isOpen,name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(d.jsxs)("div",{className:"popup__form",children:[Object(d.jsx)("input",{value:c,onChange:function(e){o(e.target.value)},className:"popup__field popup__field_link-avatar",id:"input-linkAvatar",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(d.jsx)("span",{className:"popup__form-field-error",id:"input-linkAvatar-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})})};var g=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1];return Object(d.jsxs)(O,{onSubmit:function(t){t.preventDefault(),e.addCard({name:c,link:r}),o(""),u("")},onClose:e.onClose,isOpen:e.isOpen,name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:[Object(d.jsxs)("div",{className:"popup__form",children:[Object(d.jsx)("input",{value:c,onChange:function(e){o(e.target.value)},className:"popup__field popup__field_name-photo",id:"input-photo",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30"}),Object(d.jsx)("span",{className:"popup__form-field-error",id:"input-photo-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]}),Object(d.jsxs)("div",{className:"popup__form",children:[Object(d.jsx)("input",{value:r,onChange:function(e){u(e.target.value)},className:"popup__field popup__field_link-photo",id:"input-link",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(d.jsx)("span",{className:"popup__form-field-error",id:"input-link-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})]})};var N=function(e){return Object(d.jsxs)("form",{className:"popup popup-img ".concat(e.isOpen),name:"fullImg",children:[Object(d.jsxs)("div",{className:"popup-img__container",children:[Object(d.jsx)("button",{onClick:e.onClose,className:"popup__close-btn popup-img__close-btn opacity",type:"reset"}),Object(d.jsx)("img",{className:"popup-img__img",alt:e.card.name,src:e.card.link}),Object(d.jsx)("p",{className:"popup-img__name",children:e.card.name})]}),Object(d.jsx)("div",{className:"popup__overlay overlay-img"})]})};var _=function(e){var t=Object(a.useContext)(f);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,Object(b.a)({url:"/",text:"\u0412\u044b\u0439\u0442\u0438",onSignOut:e.handleSignOut,userEmail:e.userEmail,onClick:e.onClick},"text",e.text)),Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__container",children:[Object(d.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),Object(d.jsx)("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{className:"profile__edit-btn opacity",type:"button",onClick:e.onEditProfile}),Object(d.jsx)("p",{className:"profile__job",children:t.about})]}),Object(d.jsx)("button",{className:"profile__add-btn opacity",type:"button",onClick:e.onAddPlace})]}),Object(d.jsx)("div",{className:"elements",children:e.cards.map((function(t){return Object(d.jsx)(h,Object(j.a)(Object(j.a)({card:t},t),{},{onCardClick:e.onImgCard,onCardLike:e.handleCardLike,onCardDelete:e.handleCardDelete}),t._id)}))})]}),Object(d.jsx)(v,{setAvatar:e.handleUpdateAvatar,isOpen:e.avatarPopupOpen,onClose:e.closeAllPopups}),Object(d.jsx)(x,{onUpdateUser:e.handleUpdateUser,isOpen:e.editPopupOpen,onClose:e.closeAllPopups}),Object(d.jsx)(g,{addCard:e.handleAddPlaceSubmit,isOpen:e.addPopupOpen,onClose:e.closeAllPopups}),Object(d.jsx)(O,{name:"del",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:Object(d.jsx)("input",{id:"",name:"cardId",required:!0,type:"text",hidden:!0})}),Object(d.jsx)(N,{card:e.selectedCard,isOpen:e.imgPopupOpen,onClose:e.closeAllPopups})]})};var C=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Ivan Nemirich"})})},A=n(20),k=n(21),y=new(function(){function e(t){var n=t.baseUrl;Object(A.a)(this,e),this.baseUrl=n}return Object(k.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e.status))}))}},{key:"createCardOne",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e.name,about:e.about,avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f: ".concat(e.status))}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f: ".concat(e.status))}))}},{key:"removeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return 0==t?fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u043b\u0430\u0439\u043a\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))})):1==t?fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u0438\u0437\u043b\u0430\u0439\u043a\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))})):void 0}},{key:"registration",value:function(e){var t=e.email,n=e.password;return fetch("".concat(this.baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({password:n,email:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"login",value:function(e){var t=e.email,n=e.password;return fetch("".concat(this.baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({password:n,email:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"checkValidToken",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://api.ninhao.nomoredomains.icu"});var S=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1];return Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.onLogin({email:c,password:r})},className:"form form-login",children:Object(d.jsxs)("div",{className:"form__container",children:[Object(d.jsx)("h2",{className:"form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("div",{className:"form__form",children:[Object(d.jsx)("input",{onChange:function(e){o(e.target.value)},className:"form__field form__field_email",id:"input-email",name:"email",value:c,placeholder:"Email",required:"",minLength:"2",maxLength:"30"}),Object(d.jsx)("span",{className:"form__form-field-error",id:"input-email-error"})]}),Object(d.jsxs)("div",{className:"form__form",children:[Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},className:"form__field form__field_password",id:"input-password",type:"password",name:"password",value:r,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:"",minLength:"8"}),Object(d.jsx)("span",{className:"form__form-field-error",id:"input-link-error"})]}),Object(d.jsx)("button",{className:"form__submit-btn submit-add-btn form__submit-btn_inactive",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var P=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),r=i[0],u=i[1];return Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.onRegister({email:c,password:r})},className:"form form-register",children:Object(d.jsxs)("div",{className:"form__container",children:[Object(d.jsx)("h2",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("div",{className:"form__form",children:[Object(d.jsx)("input",{value:c,onChange:function(e){o(e.target.value)},className:"form__field form__field_email",id:"input-email",name:"email",placeholder:"Email",required:"",minLength:"2",maxLength:"30"}),Object(d.jsx)("span",{className:"form__form-field-error",id:"input-email-error"})]}),Object(d.jsxs)("div",{className:"form__form",children:[Object(d.jsx)("input",{value:r,onChange:function(e){u(e.target.value)},className:"form__field form__field_password",id:"input-password",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:"",minLength:"8"}),Object(d.jsx)("span",{className:"form__form-field-error",id:"input-link-error"})]}),Object(d.jsx)("button",{className:"form__submit-btn submit-add-btn form__submit-btn_inactive",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsx)("a",{href:"/signin",children:Object(d.jsx)("p",{className:"form__description",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})]})})};var E=function(e){return Object(d.jsxs)("form",{className:"popup popup-info popup-".concat(e.name," ").concat(e.isOpen),name:"infoPopup-".concat(e.name),children:[Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:e.onClose,className:"popup__close-btn popup-add__close-btn opacity",type:"reset"}),Object(d.jsx)(d.Fragment,{children:e.children})]}),Object(d.jsx)("div",{className:"popup__overlay overlay-add"})]})};var U=function(e){return Object(d.jsxs)(E,{isOpen:e.isOpen,onClose:e.onClose,name:"ok",children:[Object(d.jsx)("img",{className:"popup-info__img",src:"data:image/png;base64,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",alt:""}),Object(d.jsxs)("h2",{className:"popup__title",children:["\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e ",Object(d.jsx)("br",{}),e.text,"!"]})]})};var I=function(e){return Object(d.jsxs)(E,{isOpen:e.isOpen,onClose:e.onClose,name:"nope",children:[Object(d.jsx)("img",{className:"popup-info__img",src:"data:image/png;base64,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",alt:""}),Object(d.jsxs)("h2",{className:"popup__title",children:["\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! ",Object(d.jsx)("br",{}),"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."]})]})},L=n(22);var w=function(e){var t=e.component,n=Object(L.a)(e,["component"]);return Object(d.jsx)(u.b,{children:n.loggedIn?Object(d.jsx)(t,Object(j.a)({},n)):Object(d.jsx)(u.a,{to:"./signin"})})};var R=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),i=s[0],p=s[1],j=Object(a.useState)(!1),b=Object(l.a)(j,2),h=b[0],O=b[1],x=Object(a.useState)(!1),v=Object(l.a)(x,2),g=v[0],N=v[1],A=Object(a.useState)({}),k=Object(l.a)(A,2),E=k[0],L=k[1],R=Object(a.useState)(!1),q=Object(l.a)(R,2),X=q[0],J=q[1],Z=Object(a.useState)(!1),K=Object(l.a)(Z,2),H=K[0],Y=K[1],M=Object(a.useState)(!1),T=Object(l.a)(M,2),V=T[0],B=T[1],D=Object(a.useState)(""),G=Object(l.a)(D,2),Q=G[0],F=G[1];function W(){J(!0)}function z(){Y(!0)}function $(){c(!1),p(!1),O(!1),N(!1),J(!1),Y(!1)}var ee="".concat(n?"popup_opened":""),te="".concat(i?"popup_opened":""),ne="".concat(h?"popup_opened":""),ae="".concat(g?"popup_opened":""),ce="".concat(X?"popup_opened":""),oe="".concat(H?"popup_opened":""),se=Object(a.useState)({}),ie=Object(l.a)(se,2),re=ie[0],le=ie[1],ue=Object(a.useState)([]),pe=Object(l.a)(ue,2),de=pe[0],me=pe[1],je=Object(u.g)();return Object(a.useEffect)((function(){"true"===localStorage.loggedIn&&y.checkValidToken().then((function(e){B(!0),F(e.email),je.push("./main")})).then((function(){y.getUserInfo().then((function(e){le(e)})).catch((function(e){return console.log(e)}))})).then((function(){y.getInitialCards().then((function(e){me(e.data)})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e)}))}),[]),Object(d.jsx)(f.Provider,{value:re,children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsxs)(u.d,{children:[Object(d.jsx)(w,{path:"/main",loggedIn:V,component:_,onEditAvatar:function(){c(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){O(!0)},onImgCard:function(e){N(!0),L(e)},cards:de,handleCardLike:function(e){var t=e.likes.some((function(e){return e===re._id}));y.changeLikeCardStatus(e._id,t).then((function(t){var n=t.data,a=de.map((function(t){return t._id===e._id?n:t}));me(a)})).catch((function(e){return console.log(e)}))},handleCardDelete:function(e){y.removeCard(e._id).then((function(){var t=de.filter((function(t){return t._id!==e._id}));me(t)})).catch((function(e){return console.log(e)}))},handleUpdateAvatar:function(e){y.setUserAvatar(e).then((function(e){le(e)})).then((function(){$()})).then((function(){y.getUserInfo().then((function(e){le(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},avatarPopupOpen:ee,closeAllPopups:$,handleUpdateUser:function(e){y.setUserInfo(e).then((function(e){le(e)})).then((function(){y.getUserInfo().then((function(e){le(e)})).catch((function(e){return console.log(e)}))})).then((function(){$()})).catch((function(e){return console.log(e)}))},editPopupOpen:te,handleAddPlaceSubmit:function(e){console.log("card",e),y.createCardOne(e).then((function(e){console.log("inside",e),me([e.data].concat(Object(r.a)(de)))})).then((function(){$()})).catch((function(e){return console.log(e)}))},addPopupOpen:ne,selectedCard:E,imgPopupOpen:ae,userEmail:Q,onClick:function(){B(!1),localStorage.setItem("loggedIn","false"),F(""),je.push("./signin")},text:"\u0412\u044b\u0439\u0442\u0438"}),Object(d.jsxs)(u.b,{path:"/signin",children:[Object(d.jsx)(m,{url:"/signup",text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsx)(S,{onLogin:function(e){y.login(e).then((function(){W(),localStorage.setItem("loggedIn","true"),F(e.email),B(!0),setTimeout((function(){je.push("./main"),$()}),1500)})).then((function(){y.getUserInfo().then((function(e){le(e)})).catch((function(e){return console.log(e)}))})).then((function(){y.getInitialCards().then((function(e){me(e.data)})).catch((function(e){return console.log(e)}))})).catch((function(e){console.log(e),z()}))}}),Object(d.jsx)(U,{isOpen:ce,onClose:$,text:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c"}),Object(d.jsx)(I,{isOpen:oe,onClose:$})]}),Object(d.jsxs)(u.b,{path:"/signup",children:[Object(d.jsx)(m,{url:"/signin",text:"\u0412\u043e\u0439\u0442\u0438"}),Object(d.jsx)(P,{onRegister:function(e){y.registration(e).then((function(e){W(),setTimeout((function(){je.push("./signin"),$()}),2e3)})).catch((function(e){console.log(e),z()}))}}),Object(d.jsx)(U,{isOpen:ce,onClose:$,text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c"}),Object(d.jsx)(I,{isOpen:oe,onClose:$})]}),Object(d.jsx)(u.b,{exact:!0,path:"/",children:V?Object(d.jsx)(u.a,{to:"/main"}):Object(d.jsx)(u.a,{to:"/signin"})})]}),Object(d.jsx)(C,{})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(R,{})})}),document.getElementById("root")),q()}},[[39,1,2]]]);
//# sourceMappingURL=main.caceb0d0.chunk.js.map