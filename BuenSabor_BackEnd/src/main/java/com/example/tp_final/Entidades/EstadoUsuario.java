package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.Estado;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name="Estado_Usuario")
@Getter
@Setter
@AllArgsConstructor
public class EstadoUsuario extends Base {

    private LocalDateTime fecha;
    @NotNull
    @Enumerated(EnumType.STRING)
    private Estado tipoEstadoUsuario;

    //Relacion N a 1 con la clase Usuario
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Usuario usuario;

    public EstadoUsuario(Estado tipoEstadoUsuario) {
        this.tipoEstadoUsuario = tipoEstadoUsuario;
        this.fecha = LocalDateTime.now();
    }
}
