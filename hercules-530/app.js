(()=>{
  'use strict';
  const parts=['app.part1.txt','app.part2.txt','night-recovery.part.txt','app.part3.txt'];
  Promise.all(parts.map(path=>fetch(path,{cache:'no-cache'}).then(response=>{
    if(!response.ok) throw new Error(`Unable to load ${path}: ${response.status}`);
    return response.text();
  }))).then(source=>{
    new Function(source.join('\n'))();
  }).catch(error=>{
    console.error(error);
    const app=document.getElementById('app');
    if(app) app.innerHTML='<section class="card"><h1>App load problem</h1><p>Please reconnect to the internet, refresh once, and reopen Hercules 5:30.</p></section>';
  });
})();
