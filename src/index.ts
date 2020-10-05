import { Observable, Observer, Subscriber } from 'rxjs';


const observer: Observer<any> = {
    next:  valor => console.log('next: ', valor),
    error: error => console.warn('Error: ',error),
    complete: () => console.info('completado')

}

const obs$ = new Observable<string>(sub =>{
    sub.next('Hola');
    sub.next('mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Arturo';


    sub.complete();


});


obs$.subscribe( observer );

/* obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('Error: ',error),
    () => console.info('completado')
); */



