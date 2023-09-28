package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.Estado;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Articulo extends Base {

    private String denominacion;
    private String descripcion;
    private String Url_Imagen;
    @NotNull
    @Enumerated(EnumType.STRING)
    private Estado estadoArticulo;

}
