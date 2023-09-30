package com.example.tp_final.Entidades;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.time.LocalTime;

@Entity
@Table(name="Detalle_Pedido")
@NoArgsConstructor
@Getter
@Setter
public class DetallePedido extends Base {

    @NotNull
    private int cantidad;
    private double subtotal;

    //Relacion N a 1 con la clase articulo
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Articulo articulo;

    //Relacion N a 1 con la clase Pedido
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Pedido pedido;

    public DetallePedido(int cantidad, Articulo articulo, Pedido pedido) {
        this.cantidad = cantidad;
        this.articulo = articulo;
        this.pedido = pedido;
    }
}

