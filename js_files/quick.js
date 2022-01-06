
async function partitionLomuto(ele2, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele2[r].style.background = '#FFF2CC';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele2[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele2[j].style.height) < parseInt(ele2[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele2[i], ele2[j]);
            // color 
            ele2[i].style.background = 'orange';
            if(i != j) ele2[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele2[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele2[i], ele2[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele2[r].style.background = 'pink';
    ele2[i].style.background = 'green';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele2.length; k++){
        if(ele2[k].style.background != 'green')
            ele2[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele2, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele2, l, r);
        await quickSort(ele2, l, pivot_index - 1);
        await quickSort(ele2, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele2.length && r <ele2.length){
            ele2[r].style.background = 'green';
            ele2[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".start");
quickSortbtn.addEventListener('click', async function(){
    let ele2 = document.querySelectorAll('.barBot');
    let l = 0;
    let r = ele2.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele2, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});