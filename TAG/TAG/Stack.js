class Stack() {
    var elements = [];

    this.add = add;
    this.pop = pop;
    this.getTopElement = getTopElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;

    function add(element) { //Con este método agregaremos uno o más elementos a nuestra pila (en la parte superior).
        elements.push(element);
    }

    function pop() { //Este método quitará de la parte superior el último elemento y también lo regresará.
        return elements.pop();
    }

    function getTopElement() { //Este método solamente nos regresará el elemento que se encuentre en la parte superior sin modificarlo ni removerlo.
        return elements[elements.length - 1];
    }

    function hasElements() { //Retornará true si nuestra pila tiene al menos un elemento, o en su defecto false si esta vacía.
        return elements.length > 0;
    }

    function removeAll() { //Limpia la pila quitando todos los elementos.
        elements = [];
    }

    function size() { //Regresará el tamaño de la pila (cuantos elementos hay en ella).
        return elements.length;
    }
}
