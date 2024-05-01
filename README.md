# Carlos Node Race
https://codesandbox.io/p/github/CarlosCallejaSaez/carlos-node-race/main

Este es un pequeño juego de carrera de coches desarrollado en Node.js. Los jugadores pueden seleccionar entre una variedad de coches y competir entre sí en una carrera simulada.
Utiliza clases de JavaScript para organizar y estructurar el código de una manera más clara y modular. Aquí hay algunas razones por las que se utilizan clases en este proyecto:

1. **Abstracción de Datos:** Las clases permiten encapsular datos y comportamientos relacionados en un solo lugar, lo que facilita la comprensión y el mantenimiento del código. En este caso, la clase `Car` encapsula los datos y métodos relacionados con un automóvil, como su nombre, velocidad máxima y método de aceleración.

2. **Reutilización de Código:** Las clases permiten crear instancias múltiples de objetos con la misma estructura y comportamiento. En el juego de carrera de coches, se pueden crear múltiples instancias de la clase `Car` para representar diferentes coches en la carrera, cada uno con sus propias características únicas.


3. **Claridad y Mantenibilidad:** El uso de clases en JavaScript proporciona una forma clara y estructurada de organizar el código.


## Cómo jugar

1. Clona o descarga este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la ubicación del repositorio.
3. Ejecuta el siguiente comando para instalar las dependencias:

    ```bash
    npm install
    ```

4. Una vez instaladas las dependencias, puedes comenzar la carrera ejecutando el siguiente comando:

    ```bash
    npm run start
    ```

5. Sigue las instrucciones en la terminal para seleccionar los coches que participarán en la carrera.

## Acerca del Juego

- **Carrera Multiplayer:** Puedes seleccionar dos coches para competir entre sí en una carrera.
- **Variedad de Coches:** Hay varios coches para elegir, cada uno con diferentes velocidades máximas y aceleraciones.
- **Terreno Aleatorio:** La carrera simula diferentes terrenos con diferentes niveles de aceleración.

¡Diviértete compitiendo en la CarlosNodeRace!