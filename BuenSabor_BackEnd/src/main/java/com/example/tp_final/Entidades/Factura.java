package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.FormaPago;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name="Factura")
@NoArgsConstructor
@Getter
@Setter
public class Factura extends Base {

    private LocalDate fechaFacturacion;
    private double descuento;
    private double total;
    @NotNull
    @Enumerated(EnumType.STRING)
    private FormaPago formaPago;


    //Constructor
    public Factura(FormaPago formaPago) {
        this.fechaFacturacion = LocalDate.now();
        this.formaPago = formaPago;
    }
}