# -*- coding: utf-8 -*-

class Router:
    """ A router to control all database operations on models in the auth application. """
    def db_for_read(self, model, **hints):
        """ Attempts to read auth models go to auth_db. """
        if model._meta.app_label == 'binance_price':
            return 'binance_price'
        elif model._meta.app_label == 'upbit_pirce':
            return  'upbit_pirce'
        return None
 
    def db_for_write(self, model, **hints):
        """ Attempts to write auth models go to auth_db. """
        if model._meta.app_label == 'binance_price':
            return 'binance_price'
        elif model._meta.app_label == 'upbit_pirce':
            return  'upbit_pirce'
        return None
 
    def allow_relation(self, obj1, obj2, **hints):
        """ Allow relations if a model in the auth app is involved. """
        if obj1._meta.app_label == 'binance_price' or \
            obj2._meta.app_label == 'binance_price':
            return True
        elif obj1._meta.app_label == 'upbit_pirce' or \
            obj2._meta.app_label == 'upbit_pirce':
            return True
        return None
 
    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """ Make sure the auth app only appears in the 'auth_db' database. """
        if app_label == 'binance_price':
            return db == 'binance_price'
        elif app_label == 'upbit_pirce':
            return db == 'upbit_pirce'
        return None