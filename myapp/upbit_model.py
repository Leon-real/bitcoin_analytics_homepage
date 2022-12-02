# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class C1Inch(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_1INCH'


class CAave(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_AAVE'


class CAda(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ADA'


class CAergo(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_AERGO'


class CAht(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_AHT'


class CAlgo(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ALGO'


class CAnkr(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ANKR'


class CApt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_APT'


class CAqt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_AQT'


class CArdr(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ARDR'


class CArk(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ARK'


class CAtom(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ATOM'


class CAvax(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_AVAX'


class CAxs(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_AXS'


class CBat(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_BAT'


class CBch(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_BCH'


class CBora(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_BORA'


class CBsv(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_BSV'


class CBtc(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_BTC'


class CBtg(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_BTG'


class CBtt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_BTT'


class CCbk(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_CBK'


class CCelo(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_CELO'


class CChz(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_CHZ'


class CCre(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_CRE'


class CCro(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_CRO'


class CCvc(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_CVC'


class CDawn(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_DAWN'


class CDka(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_DKA'


class CDoge(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_DOGE'


class CDot(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_DOT'


class CElf(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ELF'


class CEnj(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ENJ'


class CEos(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_EOS'


class CEtc(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ETC'


class CEth(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ETH'


class CFct2(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_FCT2'


class CFlow(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_FLOW'


class CGas(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_GAS'


class CGlm(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_GLM'


class CGmt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_GMT'


class CGrs(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_GRS'


class CHbar(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_HBAR'


class CHive(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_HIVE'


class CHum(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_HUM'


class CHunt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_HUNT'


class CIcx(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ICX'


class CIost(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_IOST'


class CIota(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_IOTA'


class CIq(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_IQ'


class CJst(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_JST'


class CKava(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_KAVA'


class CKnc(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_KNC'


class CLink(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_LINK'


class CLoom(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_LOOM'


class CLsk(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_LSK'


class CMana(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MANA'


class CMatic(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MATIC'


class CMbl(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MBL'


class CMed(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MED'


class CMeta(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_META'


class CMft(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MFT'


class CMlk(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MLK'


class CMoc(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MOC'


class CMtl(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MTL'


class CMvl(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_MVL'


class CNear(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_NEAR'


class CNeo(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_NEO'


class CNu(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_NU'


class COmg(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_OMG'


class COng(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ONG'


class COnt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ONT'


class COrbs(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ORBS'


class CPla(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_PLA'


class CPoly(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_POLY'


class CPowr(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_POWR'


class CPundix(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_PUNDIX'


class CQkc(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_QKC'


class CQtum(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_QTUM'


class CRep(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_REP'


class CRfr(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_RFR'


class CSand(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SAND'


class CSbd(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SBD'


class CSc(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SC'


class CSnt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SNT'


class CSol(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SOL'


class CSrm(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SRM'


class CSsx(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SSX'


class CSteem(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_STEEM'


class CStmx(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_STMX'


class CStorj(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_STORJ'


class CStpt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_STPT'


class CStrax(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_STRAX'


class CStrk(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_STRK'


class CStx(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_STX'


class CSxp(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_SXP'


class CT(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_T'


class CTfuel(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_TFUEL'


class CTheta(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_THETA'


class CTon(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_TON'


class CTrx(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_TRX'


class CTt(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_TT'


class CUpp(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_UPP'


class CVet(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_VET'


class CWaves(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_WAVES'


class CWaxp(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_WAXP'


class CWemix(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_WEMIX'


class CXec(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_XEC'


class CXem(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_XEM'


class CXlm(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_XLM'


class CXrp(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_XRP'


class CXtz(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_XTZ'


class CZil(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ZIL'


class CZrx(models.Model):
    index = models.TextField(blank=True, null=True)  # This field type is a guess.
    open = models.FloatField(blank=True, null=True)
    high = models.FloatField(blank=True, null=True)
    low = models.FloatField(blank=True, null=True)
    close = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'C_ZRX'
