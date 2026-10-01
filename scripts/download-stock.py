import urllib.request,pathlib,json,concurrent.futures
entries=[
 ('stock-paper-cups',7319334,'https://www.pexels.com/photo/paper-cups-of-coffee-on-table-7319334/','Angela Roma'),
 ('stock-cutlery',4397813,'https://www.pexels.com/photo/set-of-plastic-fork-on-white-table-4397813/','Kaboompics'),
 ('stock-takeaway',10748608,'https://www.pexels.com/photo/sliced-vegetables-in-a-take-out-container-10748608/','FOX'),
 ('stock-qsr',4393664,'https://www.pexels.com/photo/a-man-serving-takeaway-4393664/','Norma Mortenson'),
 ('stock-hotel',4873342,'https://www.pexels.com/photo/cook-at-buffet-in-hotel-4873342/','Western Skyline Hotel'),
 ('stock-warehouse',34221998,'https://www.pexels.com/photo/industrial-warehouse-with-stacked-cardboard-boxes-34221998/','Freek Wolsink'),
 ('stock-bowl-use',3035261,'https://www.pexels.com/photo/white-disposable-bowl-3035261/','David Egon'),
 ('stock-street-food',8254063,'https://www.pexels.com/photo/a-person-holding-brown-paper-plate-with-food-8254063/','ENESFILM')
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
pathlib.Path('docs/stock-image-sources.json').write_text(json.dumps(result,indent=2))
