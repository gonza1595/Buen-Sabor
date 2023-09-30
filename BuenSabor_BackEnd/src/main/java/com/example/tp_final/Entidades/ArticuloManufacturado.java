package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.Estado;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Articulo_Manufacturado")
@NoArgsConstructor
@Getter
@Setter
@PrimaryKeyJoinColumn(referencedColumnName = "id")

public class ArticuloManufacturado extends Articulo {

    private int tiempoEstimadoCocina; //En minutos
    private double precioVenta;
    private double precioCosto;
    private String receta;

    @OneToMany(mappedBy = "articuloManufacturado", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetalleArtManufacturado> detallesArtManufacturado = new ArrayList<>();

    //Constructor
    public ArticuloManufacturado(String denominacion, String descripcion, String Url_Imagen, Estado estadoArticulo, Rubro rubro, int tiempoEstimadoCocina, double precioVenta, double precioCosto, String receta) {
        super(denominacion, descripcion, Url_Imagen, estadoArticulo, rubro);
        this.tiempoEstimadoCocina = tiempoEstimadoCocina;
        this.precioVenta = precioVenta;
        this.precioCosto = precioCosto;
        this.receta = receta;
    }
}
