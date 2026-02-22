(function(){

function validColor(value){
const s=new Option().style;
s.color=value;
return s.color!=="";
}

const originalHandle=handle;

handle=async function(input){
const raw=input.trim();
const parts=raw.split(" ");
const cmd=parts[0].toLowerCase();
const args=parts.slice(1).join(" ");

if(cmd==="bg"){
if(!args)return print("Provide a color.");
if(!validColor(args))return print("Invalid color format.");
document.documentElement.style.setProperty("--bg",args);
print("Background color updated.");
return;
}

if(cmd==="text"){
if(!args)return print("Provide a color.");
if(!validColor(args))return print("Invalid color format.");
document.documentElement.style.setProperty("--glow",args);
print("Text color updated.");
return;
}

return originalHandle(input);
};

print("[Theme Plugin Loaded] Commands: bg, text");

})();
