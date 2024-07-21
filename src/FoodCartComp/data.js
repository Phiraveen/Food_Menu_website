const data=[
    {
      "id": 1,
      "name": 'Tomato Soup',
      "amt": 70,
      "category": 'Soups',
      "image":
        ' https://images.unsplash.com/photo-1620418029653-f708dd37096a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 2,
      "name": 'Mushroom Soup',
      "amt": 90,
      "category": 'Soups',
      "image":
        ' https://images.unsplash.com/photo-1608376630927-d064ac74866e?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 3,
      "name": 'Pumpkin Soup',
      "amt": 80,
      "category": 'Soups',
      "image":
        ' https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 4,
      "name": 'Chicken Soup',
      "amt": 100,
      "category": 'Soups',
      "image":
        ' https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 5,
      "name": 'Mutton Soup',
      "amt": 130,
      "category": 'Soups',
      "image":
        ' https://images.unsplash.com/photo-1713449015085-97d9511f7061?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 6,
      "name": 'Crab Soup',
      "amt": 150,
      "category": 'Soups',
      "image":
        ' https://plus.unsplash.com/premium_photo-1668143363479-b8cd08698c0d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 7,
      "name": 'Paneer Tikka',
      "amt": 180,
      "category": 'Starters',
      "image":
        ' https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1617&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 8,
      "name": 'Crispy Corns',
      "amt": 120,
      "category": 'Starters',
      "image":
        ' https://plus.unsplash.com/premium_photo-1663854478416-d420d35647e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 9,
      "name": 'Mushroom 65',
      "amt": 150,
      "category": 'Starters',
      "image":
        ' https://images.unsplash.com/photo-1508338712271-40539c947a8b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 10,
      "name": 'Chicken Leg fry',
      "amt": 210,
      "category": 'Starters',
      "image":
        ' https://images.unsplash.com/photo-1588767768269-22800153b449?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 11,
      "name": 'Mutton Sheek Kabab',
      "amt": 250,
      "category": 'Starters',
      "image":
        ' https://images.unsplash.com/photo-1625944228741-cf30983ecb91?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 12,
      "name": 'Grilled prawns',
      "amt": 280,
      "category": 'Starters',
      "image":
        ' https://images.unsplash.com/photo-1674468263672-caf95c1e3902?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 13,
      "name": 'Veg Burger',
      "amt": 150,
      "category": 'Main Course',
      "image":
        ' https://images.unsplash.com/photo-1541657267876-788b156193bc?q=80&w=1891&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 14,
      "name": 'Cheese Pizza',
      "amt": 350,
      "category": 'Main Course',
      "image":
        ' https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 15,
      "name": 'Corn Sandwich',
      "amt": 120,
      "category": 'Main Course',
      "image":
        ' https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 16,
      "name": 'Chicken Burger',
      "amt": 190,
      "category": 'Main Course',
      "image":
        ' https://images.unsplash.com/photo-1518304256228-bb65fd3df672?q=80&w=1683&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 17,
      "name": 'Chicken Pizza',
      "amt": 450,
      "category": 'Main Course',
      "image":
        ' https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1681&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 18,
      "name": 'Mushroom Salad',
      "amt": 180,
      "category": 'Main Course',
      "image":
        ' https://images.unsplash.com/photo-1632992468854-7b1d83134bc4?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 19,
      "name": 'Tender Coconut Water',
      "amt": 100,
      "category": 'Shakes',
      "image":
        ' https://plus.unsplash.com/premium_photo-1680497044033-5dc96f699b81?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 20,
      "name": 'Mango Shake',
      "amt": 120,
      "category": 'Shakes',
      "image":
        ' https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 21,
      "name": 'Strawberry Shake',
      "amt": 120,
      "category": 'Shakes',
      "image":
        ' https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 22,
      "name": 'Avocado Shake',
      "amt": 150,
      "category": 'Shakes',
      "image":
        ' https://images.unsplash.com/photo-1543648973-1eb94629e7a6?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 23,
      "name": 'Pomegranate Shake',
      "amt": 120,
      "category": 'Shakes',
      "image":
        ' https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
    {
      "id": 24,
      "name": 'Orange Lime Juice',
      "amt": 100,
      "category": 'Shakes',
      "image":
        ' https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    },
  ];
  
  export default data;