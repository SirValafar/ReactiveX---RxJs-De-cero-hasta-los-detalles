import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next:  valor => console.log('next: ', valor),
    error: error => console.warn('Error: ',error),
    complete: () => console.info('completado')

};

const intervalos$ = new Observable<number>( sub => {
    let count = 0 ;

 const interval =  setInterval ( () => {
                        count++;
                        sub.next( count );
                    },1000);


    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})

const subs = intervalos$.subscribe( num => console.log('Num:', num));

setTimeout(() => {
    subs.unsubscribe()
}, 3000);