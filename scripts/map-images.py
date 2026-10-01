import urllib.request,urllib.parse,pathlib,json,re
source=json.loads(pathlib.Path('docs/legacy-site.json').read_text())['about.php']
for m in re.finditer(r'<img[^>]+src=[\"\x27](admin/images/service/[^\"\x27]+)[\"\x27]',source):
 print(m.group(1),re.sub('<[^>]+>',' ',source[m.end():m.end()+800]).strip()[:250])
