import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class SidenavContent extends Component {

  state = {
    open: false,
    anchorEl: null
  }

  componentDidMount() {
    const {history} = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`;// get current path

    const menuLi = document.getElementsByClassName('menu');
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function (event) {

        const parentLiEle = that.closest(this, 'li');
        if(menuLi[i].classList.contains('menu') && parentLiEle !== null) {
          event.stopPropagation();

          if(menuLi[i].classList.contains('open')) {
            menuLi[i].classList.remove('open', 'active');
          } else {
            menuLi[i].classList.add('open', 'active');
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, 'li');
            if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
              menuLi[j].classList.remove('open');
            } else {
              if(menuLi[j].classList.contains('open')) {
                menuLi[j].classList.remove('open');
              } else {
                menuLi[j].classList.add('open');
              }
            }
          }
        }
      }
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  componentWillReceiveProps(nextProps) {

    const {history} = nextProps;
    const pathname = `${history.location.pathname}`;// get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
    try {
      const activeNav = this.closest(activeLi, 'ul'); // select closest ul
      if (activeNav.classList.contains('sub-menu')) {
        this.closest(activeNav, 'li').classList.add('open');
      } else {
        this.closest(activeLi, 'li').classList.add('open');
      }
    } catch (error) {

    }
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] === 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {

    }

    return null;
  }

  render() {
    return (
      <CustomScrollbars className=" scrollbar">
        <ul className="nav-menu">

          <li className="nav-header">
            <IntlMessages id="sidebar.main"/>
          </li>
          <li className = "menu no-arrow">
            <NavLink to = "/app/statistics">
              <i className = "zmdi zmdi-trending-up zmdi-hc-fw"></i>
              <span className = "nav-text"><IntlMessages id = "pages.statistics"/> </span>
            </NavLink>
          </li>
          <li className="menu no-arrow">
            <NavLink to="/app/users-administration">
              <i className="zmdi zmdi-view-list zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="pages.samplePage"/> </span>
            </NavLink>
          </li>
          <li className = "menu collapsed-box closed">
            <button className = "MuiButtonBase-root MuiButton-root MuiButton-text" 
            tabIndex = "0"
            type = "button">
              <span className = "MuiButton-label nav-text">
                  <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" ></i>
                    <IntlMessages id = "sidebar.support"/>
                </span>
              <span className = "MuiTouchRipple-root"/>
            </button>
            <ul className = "sub-menu">
              <li>
                <NavLink to="/app/new-pqr">
                  <span className="nav-text">
                    <IntlMessages id = "pages.newPQR"/>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to = '/app/support-list'>
                  <span className = "nav-text">
                    <IntlMessages id = "pages.supportList"/>
                  </span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/app/newCompany">
            <i class="zmdi zmdi-surround-sound" />
              <span className = "nav-text">
                <IntlMessages id = "new.company"/>
              </span>
            </NavLink>
          </li>
          <li className = "menu collapsed-box closed">
            <button className = "MuiButtonBase-root MuiButton-root MuiButton-text"
            tabIndex = "0"
            type = "button">
              <span className = "MuiButton-label nav-text">
                <i className = "zmdi zmdi-view-web zdmi-hc-fw" />
                <IntlMessages id = "sidebar.documentation"/> 
              </span>
            </button>
            <ul className = "sub-menu">
              <li>
                <NavLink to="/app/user-manual">
                  <span className = "nav-text">
                    <IntlMessages id = "pages.userManual" />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/videos">
                  <span className = "nav-text">
                    <IntlMessages id = "pages.videos" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
