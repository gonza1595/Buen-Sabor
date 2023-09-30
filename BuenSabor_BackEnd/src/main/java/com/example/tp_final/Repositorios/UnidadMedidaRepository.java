package com.example.tp_final.Repositorios;

import com.example.tp_final.Entidades.Rubro;
import com.example.tp_final.Entidades.UnidadMedida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnidadMedidaRepository extends JpaRepository<UnidadMedida,Long> {
}
