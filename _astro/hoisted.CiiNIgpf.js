import"https://www.google.com/recaptcha/api.js?render=6Leubm8qAAAAAKRVGUMtbEc_-GrIykZCMO_wOsNl";import"./ViewTransitions.astro_astro_type_script_index_0_lang.2daoxv0f.js";const e=document.querySelector("form");e.addEventListener("submit",async o=>{o.preventDefault();try{const r=await grecaptcha.execute("6Leubm8qAAAAAKRVGUMtbEc_-GrIykZCMO_wOsNl",{action:"submit"});document.getElementById("g-recaptcha-response").value=r;const s=new FormData(e);if((await fetch(e.action,{method:"POST",body:s})).ok){const t=document.createElement("div");t.className="text-center space-y-4",t.innerHTML=`
          <h2 class="text-2xl font-bold">Merci pour votre message !</h2>
          <p>Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.</p>
        `,e.parentNode.replaceChild(t,e)}else throw new Error("Erreur de réponse du serveur")}catch(r){console.error("Error:",r),alert("Une erreur est survenue. Veuillez réessayer.")}});