import urllib.request,pathlib,json,concurrent.futures
entries=[
 ('stock-packing',9594501,'https://www.pexels.com/photo/person-packing-using-brown-paper-9594501/','Ron Lach'),
 ('stock-export',36652829,'https://www.pexels.com/photo/cargo-containers-at-busy-shipping-port-36652829/','Rafael Rodrigues'),
 ('stock-travel',8165281,'https://www.pexels.com/photo/person-holding-a-food-takeaway-paper-bag-and-a-cup-8165281/','MART PRODUCTION'),
 ('stock-events',37060179,'https://www.pexels.com/photo/rows-of-paper-cups-with-brown-liquid-37060179/','Soc Nang Dong')
]
def download(e):
 key,num,page,author=e
 url=f'https://images.pexels.com/photos/{num}/pexels-photo-{num}.jpeg?auto=compress&cs=tinysrgb&w=1920'
 req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
 with urllib.request.urlopen(req,timeout=40) as r:data=r.read()
 out=pathlib.Path('public/assets/library/originals/'+key+'.jpg');out.write_bytes(data)
 print(key,len(data))
 return {'id':key,'original':str(out).replace('\\','/'),'sourceUrl':page,'downloadUrl':url,'creator':author,'license':'Pexels License','licenseUrl':'https://www.pexels.com/license/','kind':'stock','representative':True}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool: result=list(pool.map(download,entries))
manifest=pathlib.Path('docs/stock-image-sources.json'); previous=json.loads(manifest.read_text()); manifest.write_text(json.dumps(previous+result,indent=2))
