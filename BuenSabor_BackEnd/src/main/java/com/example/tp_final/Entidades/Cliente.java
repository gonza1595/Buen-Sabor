package com.example.tp_final.Entidades;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Cliente")

@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class Cliente extends Usuario {

    //Constructor
    public Cliente(String nombre, String apellido, String telefono, String email, String password) {
        super(nombre, apellido, telefono, email, password);
    }
    // Constructor sin argumentos
    public Cliente() {
        super(); // Llama al constructor de la clase base (Usuario)
    }

}
