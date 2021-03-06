/* Предполагается как универсальный виджет, в который можно передать разный набор данных и он его отрендерит.
 * Будет использоваться для всех небольших блоков на странице, в которые выводится узкоспециализированная информаци.
 * Пример: виджет рекламы в правом верхнем углу, виджет погоды и т.д.
 * Props: любой набор данных, необходимый для рендера.
 * Рендер: всё, что передано в качесте параметров.
 * Примечание: теориетически можно упростить до оборачивающего компонента и передавать внутрь готовую разметку.
 */

import React from "react";
import PropTypes from "prop-types";

function Widget(props) {
  return <div></div>;
}

export default Widget;
