w=document.getElementById('findipwidget');h='<style>#findipinfo div{display:inline-block;margin: 0 6px 0 0}#findipinfo img{box-shadow: 1px 1px 3px #666;border:0;display:inline}a#findipinfo{display:block;width: 178px;text-align:center;color: #444;text-decoration:none;background:#fcfcfc;padding:10px;border: 1px solid #e5e5e5;overflow:hidden;line-height:170%;box-sizing:content-box;}a#findipinfo:hover{background:#fafafa;color:#111;}.findiplink{padding:2px 8px;text-align:right;width: 182px;font-size:11px;border: 1px solid #e5e5e5;border-top:0;overflow: hidden;line-height:150%;color:#555;background:#fff;box-sizing:content-box;}.findiplink a{text-decoration:none;}</style>
<a id="findipinfo" href="//filmmediainc.blogspot.com" target="_blank"></a>';
if(w){u=document.getElementById('findipurl');
if(u&&u.innerHTML=='Powered by <a href=\"https://filmmediainc.blogspot.com/\" target=\"_blank\">filmmedia-code</a>')
{w.innerHTML=h;}else{w.innerHTML='<b>Find-IP Widget Error:</b><br>Please don\'t change <a href=\"//filmmediainc.blogspot.com\">the code</a>. Thanks.';}
}else{document.write(h);}
