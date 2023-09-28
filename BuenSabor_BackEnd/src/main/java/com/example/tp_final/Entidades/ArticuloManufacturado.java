package com.example.tp_final.Entidades;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
@Entity
@Table(name="Articulo_Manufacturado")
@NoArgsConstructor
@Getter
@Setter
public class ArticuloManufacturado extends Articulo {

    private int tiempoEstimadoCocina; //En minutos
    private double precioVenta;
    private double precioCosto;
    private String receta;

    //Relacion N a 1 con la clase RubroArtManufacturado
    @NotNull
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Rubro_Art_Manufacturado rubroArtManufacturado;

}
