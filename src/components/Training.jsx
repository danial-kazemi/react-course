const Training = () => {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = arr1.find((item)=>{
        return item > 2;
    })
    console.log(arr2);
  return (
    <div>Training</div>
  )
}

export default Training