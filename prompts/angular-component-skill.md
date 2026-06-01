# Angular Component Skill

Cuando le diga:

"quiero un componente con nombre [nombre]"

debe generar automáticamente:

```bash
ng generate component nombre
```

o:

```bash
ng g c nombre
```

Reglas:

* usar Angular standalone
* nombres en minúsculas
* usar guiones para nombres compuestos
* mostrar selector HTML
* mostrar ejemplo de uso
* sugerir importación en rutas

Ejemplo:

Entrada:
quiero un componente con nombre cliente reservar

Salida:
ng g c cliente-reservar

Selector: <app-cliente-reservar></app-cliente-reservar>
