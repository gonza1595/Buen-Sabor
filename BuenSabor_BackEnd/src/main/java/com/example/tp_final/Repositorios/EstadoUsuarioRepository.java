package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.Empleado;
import com.example.tp_final.Entidades.EstadoUsuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstadoUsuarioRepository extends CrudRepository<EstadoUsuario,Long> {
}
