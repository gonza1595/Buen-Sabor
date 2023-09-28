package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.Estado;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
@Entity
@Table(name="Articulo_Insumo")
@NoArgsConstructor
@Getter
@Setter
public class ArticuloInsumo extends Articulo {

    private double precioCompra;
    private int stockActual;
    private int stockMinimo;

    //Relacion N a 1 con la clase UnidadMedida
    @NotNull
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private UnidadMedida unidadMedida;

    //Relacion N a 1 con la clase RubroInsumo
    @NotNull
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private RubroInsumo rubroInsumo;
}
