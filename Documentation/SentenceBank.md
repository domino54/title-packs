SentenceBank.Script.txt
-----------------------

This library contains all sentences translated by third-party users in their native languages. Used exclusively by [Translations]() library. Using onlythis library is almost useless.

### Functions

#### GetScriptVersion
* Returns Text containing actual script version ("yyyy-mm-dd")

#### GetScriptName
* Returns Text containing actual script name ("SentenceBank.Script.txt")

#### GetIndex
* Returns Integer ID of specified input english message, if exists. If not, returns 0.
* Parameters:
	* Text _Message: look for ID of this message

#### GetGerman
* Returns german (de) sentence from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID

#### GetFrench
* Returns french (fr) sentence from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID

#### GetDutch
* Returns dutch (nl) sentence from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID

#### GetPolish
* Returns polish (pl) sentence from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID

#### GetPortugese
* Returns portugese (pt, pt_BR) translation from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID

#### GetRussian
* Reurns russian (ru) translation from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID

#### GetSlovak
* Returns slovak (sk) translation from specified ID, if exists. If not, returns "".
* Parameters:
	* Integer _Index: look for message with this ID
