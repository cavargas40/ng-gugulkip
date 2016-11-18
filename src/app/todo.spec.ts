import {  
    async, inject
 } from '@angular/core/testing';

 import  { Todo } from './todo';

 describe('Todo', ()=> {
     it('Debe crear una instancia.',() => {
         expect(new Todo()).toBeTruthy();
     });

     it('Debe aceptar valores en el constructor', () => {
        let todo = new Todo({
            title: 'hello',
            complete: true
        });
        expect(todo.title).toEqual('hello');
        expect(todo.complete).toEqual(true);
                 
     }); 
 });