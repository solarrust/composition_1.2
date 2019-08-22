/* В этом файле будет хранится компонент для вывода виджета новостей.
 * Props: объект с названиями вкладок и со списком новостей; сегодняшняя дата.
 * Рендерит: список с заголовкми и вложенными списками для новостей
 */
import React from "react";
import PropTypes from "prop-types";

TabWidget.propTypes = {
  items: PropTypes.object.isRequired
};

function TabWidget(props) {
  const { items } = props;

  return (
    <div className="tab-widget">
      <ul>{tabNames}</ul>
    </div>
  );
}

export default TabWidget;
