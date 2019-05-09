<?php
require_once 'entidad.php';
require_once 'IEntidadUsable.php';

class entidadApi extends entidadClase implements IEntidadUsable
{
    
    /* #region  TraerUno */
    public function TraerUno($request, $response, $args)
    {
        $id          = $args['id'];
        $unObjecto   = entidadClase::_TraerUno($id);
        $newResponse = $response->withJson($unObjecto, 200);
        return $newResponse;
    }
    /* #endregion */
    
    /* #region  TraerTodos */
    public function TraerTodos($request, $response, $args)
    {
        $todos       = entidadClase::_TraerTodos();
        $newResponse = $response->withJson($todos, 200);
        return $newResponse;
    }
    /* #endregion */
    
    /* #region  CargarUno */
    public function CargarUno($request, $response, $args)
    {
        $ArrayDeParametros = $request->getParsedBody();
        $objDelaRespuesta= new stdclass();
        //var_dump($ArrayDeParametros);
        $campo1            = $ArrayDeParametros['campo1'];
        $campo2            = $ArrayDeParametros['campo2'];
        $campo3            = $ArrayDeParametros['campo3'];
        $estado            = $ArrayDeParametros['estado'];
        
        $unObjecto         = new entidadClase();
        $unObjecto->campo1 = $campo1;
        $unObjecto->campo2 = $campo2;
        $unObjecto->campo3 = $campo3;
        $unObjecto->estado = $estado;
        $unObjecto->InsertarConParametros();
        
        $archivos = $request->getUploadedFiles();
        $destino  = "./fotos/";
        //var_dump($archivos);
        //var_dump($archivos['foto']);
        
        // $nombreAnterior = $archivos['foto']->getClientFilename();
        // $extension      = explode(".", $nombreAnterior);
        //var_dump($nombreAnterior);
        // $extension      = array_reverse($extension);
        
        // $archivos['foto']->moveTo($destino . $campo1 . "." . $extension[0]);
       // $response->getBody()->write("{'Mensaje': 'se guardo!'}");
        
        $objDelaRespuesta->respuesta="Se guardo el CD.";   
        return $response->withJson($objDelaRespuesta, 200);


        return $response;
    }
    /* #endregion */
    
    /* #region  BorrarUno */
    public function BorrarUno($request, $response, $args)
    {
        $ArrayDeParametros  = $request->getParsedBody();
        $id                 = $ArrayDeParametros['id'];
        $unObjecto          = new entidadClase();
        $unObjecto->id      = $id;
        $cantidadDeBorrados = $unObjecto->_BorrarUno();
        
        $objDelaRespuesta           = new stdclass();
        $objDelaRespuesta->cantidad = $cantidadDeBorrados;
        if ($cantidadDeBorrados > 0) {
            $objDelaRespuesta->resultado = "algo borro!!!";
        } else {
            $objDelaRespuesta->resultado = "no Borro nada!!!";
        }
        $newResponse = $response->withJson($objDelaRespuesta, 200);
        return $newResponse;
    }
    /* #endregion */
    
    /* #region  ModificarUno */
    public function ModificarUno($request, $response, $args)
    {
        //$response->getBody()->write("<h1>Modificar  uno</h1>");
        $ArrayDeParametros = $request->getParsedBody();
        //var_dump($ArrayDeParametros);        
        $unObjecto         = new entidadClase();
        $unObjecto->id     = $ArrayDeParametros['id'];
        $unObjecto->campo1 = $ArrayDeParametros['campo1'];
        $unObjecto->campo2 = $ArrayDeParametros['campo2'];
        $unObjecto->campo3 = $ArrayDeParametros['campo3'];
        $unObjecto->estado = $ArrayDeParametros['estado'];
        
        $resultado                   = $unObjecto->ModificarConParametros();
        $objDelaRespuesta            = new stdclass();
        //var_dump($resultado);
        $objDelaRespuesta->resultado = $resultado;
        return $response->withJson($objDelaRespuesta, 200);
    }
    /* #endregion */
    
}