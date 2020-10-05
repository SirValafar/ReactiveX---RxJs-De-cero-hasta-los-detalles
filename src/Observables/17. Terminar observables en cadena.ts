import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next:  valor => console.log('next: ', valor),
    error: error => console.warn('Error: ',error),
    complete: () => console.info('completado')
};

const intervalos$ = new Observable<number>( sub => {
    let count = 0 ;

 const interval = setInterval ( () => {
                        count++;
                        sub.next( count );
                        console.log( count );
                    },1000);

    setTimeout(() =>{
        sub.complete()
    }, 2500);
                
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

/* const subs = intervalos$.subscribe( num => console.log('Num:', num)); */
const subs1 = intervalos$.subscribe( observer );
const subs2 = intervalos$.subscribe( observer );
const subs3 = intervalos$.subscribe( observer );

subs1.add( subs2 )
     .add( subs3 );

setTimeout(() => {
    subs1.unsubscribe()

    console.log('Completado TimeOut');
}, 6000);