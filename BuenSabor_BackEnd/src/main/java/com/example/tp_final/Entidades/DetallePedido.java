package com.example.tp_final.Entidades;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.time.LocalTime;

@Entity
@Table(name="Detalle_Pedido")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DetallePedido extends Base {

    @NotNull
    private int cantidad;
    private double subtotal;

    //Relacion N a 1 con la clase rubroInsumo
    @NotNull
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private RubroInsumo rubroInsumo;

    //Relacion N a 1 con la clase rubroArtManufacturado
    @NotNull
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Rubro_Art_Manufacturado rubroArtManufacturado;

    //Relacion N a 1 con la clase Pedido
    @NotNull
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Pedido pedido;

    //Constructor



}

