import{_ as p,N as u,c as v,a as c,b as e,w as l,v as s,d as m,F as f,o as _,p as h,e as b,f as g,r as S}from"./index-GQbw-b6C.js";import{s as y}from"./vue-multiselect.esm-8oDUz-s9.js";const P={components:{NavBar:u,Multiselect:y},data(){return{name:"",email:"",state:"",date:"",city:"",address:"",reference:"",complaint:"",image:null}},methods:{handleFileChange(n){const o=n.target.files[0];o&&(this.image=URL.createObjectURL(o))},sendForm(){const n={name:this.name,email:this.email,state:this.state,date:this.date,city:this.city,address:this.address,reference:this.reference,complaint:this.complaint,image:this.image,type:"Maus tratos aos animais"},o=JSON.parse(localStorage.getItem("formData"))||[];o.unshift(n),localStorage.setItem("formData",JSON.stringify(o)),this.clearForm(),alert("Formulário enviado com sucesso!")},clearForm(){this.name="",this.email="",this.state="",this.date="",this.city="",this.address="",this.reference="",this.complaint="",this.image=null}}},t=n=>(h("data-v-7e58f451"),n=n(),b(),n),R={class:"main"},F=t(()=>e("div",{class:"blur"},null,-1)),C={class:"form"},M={class:"personal-information"},N=t(()=>e("label",{for:"name"},"Nome",-1)),V=t(()=>e("br",null,null,-1)),x=t(()=>e("label",{for:"email"},"E-mail",-1)),A=t(()=>e("br",null,null,-1)),D={class:"region"},U=t(()=>e("label",{for:"estado"},"Selecione o estado",-1)),B=t(()=>e("br",null,null,-1)),E=g('<option value="" data-v-7e58f451></option><option value="AC" data-v-7e58f451>Acre</option><option value="AL" data-v-7e58f451>Alagoas</option><option value="AP" data-v-7e58f451>Amapá</option><option value="BA" data-v-7e58f451>Bahia</option><option value="CE" data-v-7e58f451>Ceará</option><option value="DF" data-v-7e58f451>Distrito Federal</option><option value="ES" data-v-7e58f451>Espírito Santo</option><option value="GO" data-v-7e58f451>Goiás</option><option value="MA" data-v-7e58f451>Maranhão</option><option value="MT" data-v-7e58f451>Mato Grosso</option><option value="MS" data-v-7e58f451>Mato Grosso do Sul</option><option value="MG" data-v-7e58f451>Minas Gerais</option><option value="PA" data-v-7e58f451>Pará</option><option value="PB" data-v-7e58f451>Paraíba</option><option value="PR" data-v-7e58f451>Paraná</option><option value="PE" data-v-7e58f451>Pernambuco</option><option value="PI" data-v-7e58f451>Piauí</option><option value="RJ" data-v-7e58f451>Rio de Janeiro</option><option value="RN" data-v-7e58f451>Rio Grande do Norte</option><option value="RS" data-v-7e58f451>Rio Grande do Sul</option><option value="RO" data-v-7e58f451>Rondônia</option><option value="RR" data-v-7e58f451>Roraima</option><option value="SC" data-v-7e58f451>Santa Catarina</option><option value="SP" data-v-7e58f451>São Paulo</option><option value="SE" data-v-7e58f451>Sergipe</option><option value="TO" data-v-7e58f451>Tocantins</option>',27),G=[E],I=t(()=>e("label",{for:"cidade"},"Cidade",-1)),O=t(()=>e("br",null,null,-1)),w=t(()=>e("label",{for:"endereco"},"Endereço",-1)),J=t(()=>e("br",null,null,-1)),T=t(()=>e("label",{for:"referencia"},"Ponto de referência",-1)),k=t(()=>e("br",null,null,-1)),L={class:"date-description"},j={class:"date"},q=t(()=>e("label",{for:"date"},"Data",-1)),z=t(()=>e("br",null,null,-1)),H={class:"description"},K=t(()=>e("label",{for:"situacao"},"Descreva a sua denúncia",-1)),Q=t(()=>e("br",null,null,-1)),W={class:"image"},X=t(()=>e("label",{for:"imagem"},"Anexar evidências",-1)),Y=t(()=>e("br",null,null,-1)),Z=t(()=>e("label",{for:"imagem",class:"imagem-label"},null,-1));function $(n,o,ee,oe,i,d){const r=S("NavBar");return _(),v(f,null,[c(r),e("div",R,[F,e("div",C,[e("div",M,[e("div",null,[N,V,l(e("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=a=>i.name=a)},null,512),[[s,i.name]])]),e("div",null,[x,A,l(e("input",{type:"email",id:"email","onUpdate:modelValue":o[1]||(o[1]=a=>i.email=a)},null,512),[[s,i.email]])])]),e("div",D,[e("div",null,[U,B,l(e("select",{id:"estado",name:"estado","onUpdate:modelValue":o[2]||(o[2]=a=>i.state=a)},G,512),[[m,i.state]])]),e("div",null,[I,O,l(e("input",{type:"text",id:"cidade","onUpdate:modelValue":o[3]||(o[3]=a=>i.city=a)},null,512),[[s,i.city]])]),e("div",null,[w,J,l(e("input",{type:"text",id:"endereco","onUpdate:modelValue":o[4]||(o[4]=a=>i.address=a)},null,512),[[s,i.address]])]),e("div",null,[T,k,l(e("input",{type:"text",id:"referencia","onUpdate:modelValue":o[5]||(o[5]=a=>i.reference=a)},null,512),[[s,i.reference]])])]),e("div",L,[e("div",j,[q,z,l(e("input",{type:"date",id:"date","onUpdate:modelValue":o[6]||(o[6]=a=>i.date=a)},null,512),[[s,i.date]])]),e("div",H,[K,Q,l(e("textarea",{type:"descricao",id:"situacao","onUpdate:modelValue":o[7]||(o[7]=a=>i.complaint=a)},null,512),[[s,i.complaint]])])]),e("div",W,[X,Y,e("div",null,[Z,e("input",{type:"file",id:"imagem",name:"imagem",accept:"image/*",onChange:o[8]||(o[8]=(...a)=>d.handleFileChange&&d.handleFileChange(...a))},null,32)])]),e("button",{onClick:o[9]||(o[9]=(...a)=>d.sendForm&&d.sendForm(...a))},"Enviar Denúncia")])])],64)}const ie=p(P,[["render",$],["__scopeId","data-v-7e58f451"]]);export{ie as default};
