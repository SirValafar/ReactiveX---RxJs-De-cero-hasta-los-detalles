import { Observable, Observer, Subject, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next:  valor => console.log('next: ', valor),
    error: error => console.warn('Error: ',error),
    complete: () => console.info('completado')
};

const instervalo$ = new Observable<number>( subs => {
    const intervalID = setInterval( 
        () => subs.next( Math.random() ), 3000
    );
    return () => clearInterval (intervalID);
});

/* 
    1- Casteo Multiple
    2- Tambien es un observer
    3- Next, error y complete
*/
const subjects$ = new Subject();
instervalo$.subscribe( subjects$ );


/* 
const sub1 = instervalo$.subscribe(rnd => console.log('subs1', rnd));
const sub2 = instervalo$.subscribe(rnd => console.log('subs2', rnd));
const sub3 = instervalo$.subscribe(rnd => console.log('subs3', rnd)); 
*/

const sub1 = subjects$.subscribe(rnd => console.log('subs1', rnd));
const sub2 = subjects$.subscribe(rnd => console.log('subs2', rnd));
const sub3 = subjects$.subscribe(rnd => console.log('subs3', rnd)); 

