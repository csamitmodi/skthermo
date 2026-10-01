import urllib.request,json,re,pathlib
base='https://www.skgroupalwar.com/'
result={}
for page in ['','about.php','product.php?pid=1','product.php?pid=2','product.php?pid=3','infrastructure.php','gallery.php','contact.php']:
 try:
  html=urllib.request.urlopen(base+page,timeout=25).read().decode('utf-8','replace')
  result[page or 'home']=html
 except Exception as e: result[page]={'error':str(e)}
pathlib.Path('docs/legacy-site.json').write_text(json.dumps(result,indent=2))
for k,v in result.items():
 if isinstance(v,str):
  print(k, re.findall(r'<img[^>]+src=[\"\x27]([^\"\x27]+)',v)[:20])
