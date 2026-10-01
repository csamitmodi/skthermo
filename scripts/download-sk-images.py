import urllib.request,urllib.parse,pathlib,json
files={'printed-paper-cups':'IMG-20210324-WA0069.jpg','disposable-juice-glass':'IMG-20210324-WA0070.jpg','white-paper-cups':'IMG-20210324-WA0071.jpg','water-plastic-glass':'IMG-20210324-WA0074.jpg','plastic-cups':'IMG-20210324-WA0098.jpg','plastic-range':'IMG-20210324-WA0097.jpg','100ml-tea-cup':'SKP 2.jpg.jpeg'}
manifest=[]
for name,file in files.items():
 url='https://www.skgroupalwar.com/admin/images/service/'+urllib.parse.quote(file)
 out=pathlib.Path('public/assets/products/'+name+'.jpg')
 with urllib.request.urlopen(url,timeout=30) as response: out.write_bytes(response.read())
 manifest.append({'name':name,'source':url,'local':'/'+str(out).replace('public/','').replace('\\','/')})
 print(name,out.stat().st_size)
pathlib.Path('docs/image-sources.json').write_text(json.dumps(manifest,indent=2))
