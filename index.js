class Pagination{
  constructor(items,pageSize){
    this.items=items;
    this.pageSize=pageSize;
    this.currentPage=0;
    this.itemArray=this.distributeItems(this.items,this.pageSize);
  }
  distributeItems(items,pageSize){
    let itemArray=[];
    let copyOfItems=items;
    for(let i=0;i<copyOfItems.length;i++){
      let temp=[];
      temp=copyOfItems.splice(0,pageSize);
      itemArray.push(temp);
    }
    itemArray.push(items);
    return itemArray;
  }
  printItemArray(){
    console.log(this.itemArray);
  }
  getVisibleItems(){
    console.log(this.itemArray[this.currentPage]);
    
  }
  nextPage(){
    if(this.currentPage!==this.itemArray.length-1){
      this.currentPage=this.currentPage+1;
    }
    return this;
  }
  previousPage(){
   if(this.currentPage!==0){
      this.currentPage=this.currentPage-1;
    }
    return this;
  }
  firstPage(){
    this.currentPage=0;
    return this;
  }
  lastPage(){
    this.currentPage=this.itemArray.length-1;
    return this;
  }
  goToPage(pageNumber){
    this.currentPage=pageNumber-1;
    return this;
  }
}
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);
// p.printItemArray();
// p.getVisibleItems();
//  p.nextPage();
// p.getVisibleItems();
// p.previousPage();
// p.getVisibleItems();
// p.firstPage();
// p.getVisibleItems();
// p.lastPage();
// p.getVisibleItems();
// p.goToPage(5);
// p.getVisibleItems();
 p.firstPage();
p.getVisibleItems();
p.nextPage().nextPage();
p.getVisibleItems();
p.previousPage();
