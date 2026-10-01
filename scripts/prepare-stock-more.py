import pathlib
p=pathlib.Path('scripts/download-stock.py');s=p.read_text(encoding='utf-8-sig');start=s.index('entries=[');end=s.index('\ndef download',start);s=s[:start]+'''entries=[
 ('stock-packing',9594501,'https://www.pexels.com/photo/person-packing-using-brown-paper-9594501/','Ron Lach'),
 ('stock-export',36652829,'https://www.pexels.com/photo/cargo-containers-at-busy-shipping-port-36652829/','Rafael Rodrigues'),
 ('stock-travel',8165281,'https://www.pexels.com/photo/person-holding-a-food-takeaway-paper-bag-and-a-cup-8165281/','MART PRODUCTION'),
 ('stock-events',37060179,'https://www.pexels.com/photo/rows-of-paper-cups-with-brown-liquid-37060179/','Soc Nang Dong')
]'''+s[end:];s=s.replace("pathlib.Path('docs/stock-image-sources.json').write_text(json.dumps(result,indent=2))","manifest=pathlib.Path('docs/stock-image-sources.json'); previous=json.loads(manifest.read_text()); manifest.write_text(json.dumps(previous+result,indent=2))");pathlib.Path('scripts/download-stock-more.py').write_text(s,encoding='utf-8')
