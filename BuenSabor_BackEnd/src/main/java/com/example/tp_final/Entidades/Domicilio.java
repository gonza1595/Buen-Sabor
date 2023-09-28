package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.Localidad;
import com.example.tp_final.Enumeraciones.Rol;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Domicilio")
@Data
@NoArgsConstructor
public class Domicilio implements Serializable {
    @Id
    private String numero;
    private String calle;
    private String codigoPostal;
    private String nroDpt;
    private String pisoDto;
    @NotNull
    @Enumerated(EnumType.STRING)
    private Localidad localidad;

    //Relacion N a 1 con la clase Usuario
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Usuario usuario;

    //Constructor
    public Domicilio(String numero, String calle, String codigoPostal, String nroDpt, String pisoDto, Localidad localidad, Usuario usuario) {
        this.numero = numero;
        this.calle = calle;
        this.codigoPostal = codigoPostal;
        this.nroDpt = nroDpt;
        this.pisoDto = pisoDto;
        this.localidad = localidad;
        this.usuario = usuario;
    }
}
