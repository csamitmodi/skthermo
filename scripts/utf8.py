from pathlib import Path
p=Path('src/data.js');s=p.read_text(encoding='utf-8');s=s.split('// Recovered from SK')[0];p.write_text(s,encoding='utf-8')
for name in ['src/render.js','src/styles.css','src/client.js']:
 p=Path(name)
 try:s=p.read_bytes().decode('utf-8')
 except UnicodeDecodeError:s=p.read_bytes().decode('cp1252')
 p.write_text(s,encoding='utf-8')
