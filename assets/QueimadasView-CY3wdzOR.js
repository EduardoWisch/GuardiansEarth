import{_ as r,N as p,c as u,a as m,b as e,w as l,v as s,d as v,F as f,o as _,p as h,e as b,f as g,r as S}from"./index-CgTETn6X.js";import{s as y}from"./vue-multiselect.esm-Ca1YKglM.js";const P={components:{NavBar:p,Multiselect:y},data(){return{name:"",email:"",state:"",date:"",city:"",address:"",reference:"",complaint:"",image:null}},methods:{handleFileChange(n){const o=n.target.files[0];o&&(this.image=URL.createObjectURL(o))},sendForm(){const n={name:this.name,email:this.email,state:this.state,date:this.date,city:this.city,address:this.address,reference:this.reference,complaint:this.complaint,image:this.image,type:"Queimadas e desmatamento"},o=JSON.parse(localStorage.getItem("formData"))||[];o.push(n),localStorage.setItem("formData",JSON.stringify(o)),this.clearForm(),alert("Formulário enviado com sucesso!")},clearForm(){this.name="",this.email="",this.state="",this.date="",this.city="",this.address="",this.reference="",this.complaint="",this.image=null}}},t=n=>(h("data-v-c8c8f4e0"),n=n(),b(),n),R={class:"main"},F=t(()=>e("div",{class:"blur"},null,-1)),C={class:"form"},N={class:"personal-information"},V=t(()=>e("label",{for:"name"},"Nome",-1)),x=t(()=>e("br",null,null,-1)),M=t(()=>e("label",{for:"email"},"E-mail",-1)),A=t(()=>e("br",null,null,-1)),D={class:"region"},U=t(()=>e("label",{for:"estado"},"Selecione o estado",-1)),B=t(()=>e("br",null,null,-1)),E=g('<option value="" data-v-c8c8f4e0></option><option value="AC" data-v-c8c8f4e0>Acre</option><option value="AL" data-v-c8c8f4e0>Alagoas</option><option value="AP" data-v-c8c8f4e0>Amapá</option><option value="BA" data-v-c8c8f4e0>Bahia</option><option value="CE" data-v-c8c8f4e0>Ceará</option><option value="DF" data-v-c8c8f4e0>Distrito Federal</option><option value="ES" data-v-c8c8f4e0>Espírito Santo</option><option value="GO" data-v-c8c8f4e0>Goiás</option><option value="MA" data-v-c8c8f4e0>Maranhão</option><option value="MT" data-v-c8c8f4e0>Mato Grosso</option><option value="MS" data-v-c8c8f4e0>Mato Grosso do Sul</option><option value="MG" data-v-c8c8f4e0>Minas Gerais</option><option value="PA" data-v-c8c8f4e0>Pará</option><option value="PB" data-v-c8c8f4e0>Paraíba</option><option value="PR" data-v-c8c8f4e0>Paraná</option><option value="PE" data-v-c8c8f4e0>Pernambuco</option><option value="PI" data-v-c8c8f4e0>Piauí</option><option value="RJ" data-v-c8c8f4e0>Rio de Janeiro</option><option value="RN" data-v-c8c8f4e0>Rio Grande do Norte</option><option value="RS" data-v-c8c8f4e0>Rio Grande do Sul</option><option value="RO" data-v-c8c8f4e0>Rondônia</option><option value="RR" data-v-c8c8f4e0>Roraima</option><option value="SC" data-v-c8c8f4e0>Santa Catarina</option><option value="SP" data-v-c8c8f4e0>São Paulo</option><option value="SE" data-v-c8c8f4e0>Sergipe</option><option value="TO" data-v-c8c8f4e0>Tocantins</option>',27),G=[E],I=t(()=>e("label",{for:"cidade"},"Cidade",-1)),O=t(()=>e("br",null,null,-1)),w=t(()=>e("label",{for:"endereco"},"Endereço",-1)),J=t(()=>e("br",null,null,-1)),T=t(()=>e("label",{for:"referencia"},"Ponto de referência",-1)),k=t(()=>e("br",null,null,-1)),L={class:"date-description"},Q={class:"date"},j=t(()=>e("label",{for:"date"},"Data",-1)),q=t(()=>e("br",null,null,-1)),z={class:"description"},H=t(()=>e("label",{for:"situacao"},"Descreva a sua denúncia",-1)),K=t(()=>e("br",null,null,-1)),W={class:"image"},X=t(()=>e("label",{for:"imagem"},"Anexar evidências",-1)),Y=t(()=>e("br",null,null,-1)),Z=t(()=>e("label",{for:"imagem",class:"imagem-label"},null,-1));function $(n,o,ee,oe,i,d){const c=S("NavBar");return _(),u(f,null,[m(c),e("div",R,[F,e("div",C,[e("div",N,[e("div",null,[V,x,l(e("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a)},null,512),[[s,i.name]])]),e("div",null,[M,A,l(e("input",{type:"email",id:"email","onUpdate:modelValue":o[1]||(o[1]=a=>i.email=a)},null,512),[[s,i.email]])])]),e("div",D,[e("div",null,[U,B,l(e("select",{id:"estado",name:"estado","onUpdate:modelValue":o[2]||(o[2]=a=>i.state=a)},G,512),[[v,i.state]])]),e("div",null,[I,O,l(e("input",{type:"text",id:"cidade","onUpdate:modelValue":o[3]||(o[3]=a=>i.city=a)},null,512),[[s,i.city]])]),e("div",null,[w,J,l(e("input",{type:"text",id:"endereco","onUpdate:modelValue":o[4]||(o[4]=a=>i.address=a)},null,512),[[s,i.address]])]),e("div",null,[T,k,l(e("input",{type:"text",id:"referencia","onUpdate:modelValue":o[5]||(o[5]=a=>i.reference=a)},null,512),[[s,i.reference]])])]),e("div",L,[e("div",Q,[j,q,l(e("input",{type:"date",id:"date","onUpdate:modelValue":o[6]||(o[6]=a=>i.date=a)},null,512),[[s,i.date]])]),e("div",z,[H,K,l(e("textarea",{type:"descricao",id:"situacao","onUpdate:modelValue":o[7]||(o[7]=a=>i.complaint=a)},null,512),[[s,i.complaint]])])]),e("div",W,[X,Y,e("div",null,[Z,e("input",{type:"file",id:"imagem",name:"imagem",accept:"image/*",onChange:o[8]||(o[8]=(...a)=>d.handleFileChange&&d.handleFileChange(...a))},null,32)])]),e("button",{onClick:o[9]||(o[9]=(...a)=>d.sendForm&&d.sendForm(...a))},"Enviar Denúncia")])])],64)}const ie=r(P,[["render",$],["__scopeId","data-v-c8c8f4e0"]]);export{ie as default};
