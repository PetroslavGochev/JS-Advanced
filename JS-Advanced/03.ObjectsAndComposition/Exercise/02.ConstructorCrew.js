function constructor(object){   
    if(object.dizziness){
        object.levelOfHydrated += object.weight * object.experience * 0.1;
    }
    return object;
}

let result = constructor({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );
console.log(result);
