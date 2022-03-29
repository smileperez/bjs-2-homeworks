console.log("///////////// ЗАДАЧА 1 /////////////");

const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3); 


console.log("///////////// ЗАДАЧА 2 /////////////");

const sendSignal = () => console.log('Сигнал послан'); 
const upgradedSendSignal = debounceDecoratorNew(sendSignal,3000);
setTimeout(upgradedSendSignal());
setTimeout(upgradedSendSignal(),300); 
setTimeout(upgradedSendSignal(),900); 
setTimeout(upgradedSendSignal(),1200);
setTimeout(upgradedSendSignal(),2300);
setTimeout(upgradedSendSignal(),4400);
setTimeout(upgradedSendSignal(),4500);