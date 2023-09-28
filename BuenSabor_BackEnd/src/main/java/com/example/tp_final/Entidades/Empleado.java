package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.Rol;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;

@Entity
@Table(name="Empleado")
@Getter
@Setter
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class Empleado extends Usuario {

    @NotNull
    @Enumerated(EnumType.STRING)
    private Rol rol;

    //Constructor
    public Empleado(String nombre, String apellido, String telefono, String email, String password, Rol rol) {
        super(nombre, apellido, telefono, email, password);
        this.rol = rol;
    }
}
