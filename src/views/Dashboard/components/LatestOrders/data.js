import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: '1',
    
    customer: {
      name: 'Jolly'
    },
    createdAt: 'August 1,2020',
    status: 'moderate'
  },
  {
    id: uuid(),
    ref: '2',
    
    customer: {
      name: 'Fernandes'
    },
    createdAt: 'August 8,2020',
    status: 'safe'
  },
  {
    id: uuid(),
    ref: '3',
    
    customer: {
      name: 'Michael'
    },
    createdAt: 'August 10,2020',
    status: 'danger'
  },
  {
    id: uuid(),
    ref: '4',
    
    customer: {
      name: 'Aparna'
    },
    createdAt: 'August 19,2020',
    status: 'moderate'
  },
  {
    id: uuid(),
    ref: '5',
    amount: 32.54,
    customer: {
      name: 'India'
    },
    createdAt:'August 20,2020',
    status: 'safe'
  },
  {
    id: uuid(),
    ref: '6',
    
    customer: {
      name: 'Natasha'
    },
    createdAt: 'August 25,2020',
    status: 'safe'
  }
];
