package com.example.tp_final.Entidades;

import com.example.tp_final.Enumeraciones.Estado;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
@Entity
@Table(name="Rubro_Art_Manufacturado")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Rubro_Art_Manufacturado extends BaseWithDate {

    private String denominacion;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Estado estadoRubro;
}
