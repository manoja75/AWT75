let branch="hyd"
let location={getBranch:function(){
    return branch;
},
setBranch:function(newBranch){
     branch=newBranch;
}
}
export default location;