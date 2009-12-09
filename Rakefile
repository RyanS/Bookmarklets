desc "Concats the src code"
task :sprocketize do
  `sprocketize src/bookmarklets.js > release/bookmarklets.js`
  `sprocketize src/bookmarklets_with_sizzle.js > release/bookmarklets_with_sizzle.js`
end

desc "minifies the code with packr"
task :min do
  `packr -s release/bookmarklets.js > release/bookmarklets.min.js`
  `packr -s release/bookmarklets_with_sizzle.js > release/bookmarklets_with_sizzle.min.js`
end

desc "Creates a bookmarklet that calls the provided function"
task :create_bookmarklet do
  puts "The bookmarklet has been copied to your pasteboard. Create a new bookmark and hit paste!"
  `echo "javascript:(function(){var%20script=document.createElement('script');window.__bf__='#{ENV['function']}';script.src='http://cocodesign.net/prototypes/bookmarklets.min.js?'+(new%20Date().getTime());document.body.appendChild(script);})();" | pbcopy`
end